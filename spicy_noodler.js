class Noodler {
  constructor(left, right) {
    this.x = width / 2;
    this.y = height / 2;
    this.height = 60;
    this.width = 70;
    this.velocity = 0;
    this.gravity = 0.1;
    this.jumpForce = 6;
    this.left = left;
    this.right = right;
    this.goingLeft = true;
  }

  change_img(limg, rimg) {
    this.left = limg;
    this.right = rimg;
    this.x = width / 2;
    this.y = height / 2;
  }

  draw() {
    if (this.goingLeft) {
      image(this.left,this.x,this.y,this.width, this.height);
    } else {
      image(this.right,this.x,this.y, this.width, this.height);}
  }

  update(platforms) {
    // screenwrap so we don't lose the noodler 
    if (this.x + this.width < 0) this.x = width;
    if (this.x > width) this.x = -this.width;
    if (this.velocity < -9) this.velocity = -9; // erratic velocity
    
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

    if (keyIsDown(65)) {
      this.x -= 4;
      this.goingLeft = true;
    }
    
    if (keyIsDown(68)) {
      this.x += 4;
      this.goingLeft = false;
    }
  

    
     for (let platform of platforms) {
       // collision detector
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