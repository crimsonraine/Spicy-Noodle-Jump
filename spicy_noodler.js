class Noodler {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.height = 60;
    this.width = 60;

    this.velocity = 0;
    this.gravity = 0.1;
    this.jumpForce = 9;
    
    // this.left = left;
    // this.right = right;
    
    // this.goingLeft = true;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
    // if (this.goingLeft) {
    //   image(this.left,this.x,this.y,this.width, this.height);
    // } else {
    //   image(this.right,this.x,this.y, this.width, this.height);}
  }

  update(platforms) {
    // screenwrap so we don't lose the noodler 
    if (this.x + this.width < 0) this.x = width;
    if (this.x > width) this.x = -this.width;
    if (this.velocity < -9) this.velocity = -9; // doesn't go stationary?
    
    // basics of noodler movement
    this.velocity += this.gravity; 
    this.y += this.velocity;
      
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 4;
      this.goingLeft = true;
    }
    
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 4;
      this.goingLeft = false;
    }
    
     for (let platform of platforms) {
      if (this.y + this.height >= platform.y && this.y + this.height <= platform.y + platform.height) {
        
        let minX = platform.x - this.width;
        let maxX = platform.x + platform.width;
        
        if (this.x >= minX && this.x <= maxX) {
          this.jump();
        }
      }
    }
  }

  // add the new jump function!
  jump() {
    this.velocity -= this.jumpForce;
  }
}