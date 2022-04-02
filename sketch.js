// Find my blog at https://codeheir.com/
// I do a lot of p5.js stuff that might interest you!

let noodler;

let gap;
let platforms = [];

let score;
let bg;
let noodlerLeft;
let noodlerRight;
let platformImg;

function setup() {
  createCanvas(400, 600);

  platforms = [];
  score = 0;
  bg = loadImage('spicy background.jpg'); // add this to load the background
  noodlerLeft = loadImage('imgs/ramen.png');
  noodlerRight = loadImage('imgs/ramen-reverse.png');
  noodler = new Noodler();
  platformImg = loadImage('imgs/pepper1.png');

  let platformCount = 4;
  gap = height / platformCount;
  for (let i = 1; i < 10; i++) {
    platforms.push(new Platform(random(width), (height * 1.5) - i * gap, platformImg))
  }

}

function draw() {
  image(bg, 0, 0);
  if (noodler.velocity > 10) {
    noLoop();
    gameOver();
  } else {
    translate(0, width / 2 - noodler.y);

    push();
    fill(0)
    textSize(30);
    textAlign(CENTER);
    text(score, width / 2, noodler.y - 150);
    pop();

    noodler.draw();
    noodler.update(platforms);

    for (let platform of platforms) {
      platform.draw();
    }

    // create more platforms as the noodler moves up the screen
    if (noodler.y < platforms[platforms.length - 1].y + 200) {
      platforms.push(new Platform(random(width), platforms[platforms.length - 1].y - gap, platformImg));
    }

    if (platforms[0].y > noodler.y + 400) {
      platforms.splice(0, 1);
      score++;
    }
  }
}

function gameOver() {
  
  textSize(30);
  image(bg, 0, 0);
  textAlign(CENTER);
  text(`You scored ${score}`, width / 2, height / 2);
  textSize(25);
  text(`Hit space to play again`, width / 2, height / 2 + 100);
}


function keyPressed() {
  if (key == ' ') {
    doodler.jump();
    setup();
    loop();
  }
}