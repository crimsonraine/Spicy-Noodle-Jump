// Find my blog at https://codeheir.com/
// I do a lot of p5.js stuff that might interest you!

//import Noodler from "spicy_noodler.js";
//import Platform from "Platform.js";

let noodler;

let gap;
let platforms = [];

let score;
let bg;
let noodlerLeft;
let noodlerRight;
let platformImg;

function charSet() {
  textSize(24);
  image(bg, 0, 0);
  fill(255, 255, 255);
  textAlign(CENTER);
  text(`M for menu and J/j and K/k
for a different ramen!
(Trial Version)

Space/s to restart!
References: codeheir.com
(p5.js help)`, width / 2, height / 3);
}

function setup() {
  createCanvas(400, 600);
  // charSet()
  platforms = [];
  score = 0;
  bg = loadImage('spicy background.jpg'); // add this to load the background
  noodlerLeft = loadImage('imgs/ramen.png');
  noodlerRight = loadImage('imgs/ramen_reverse.png');
  noodler = new Noodler(noodlerLeft, noodlerRight);
  platformImg = loadImage('imgs/pepper1.png');

  let platformCount = 6;
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
    translate(0, width / 2 - noodler.y); // move the game's view up with noodler

    push();
    fill(0)
    textSize(50);
    textAlign(CENTER);
    fill(255, 255, 255)
    text(score, width / 2, noodler.y - 150);
    pop();

    noodler.draw();
    noodler.update(platforms);

    for (let platform of platforms) {
      platform.draw(); // draw platforms
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
  fill(255, 255, 255);
  textAlign(CENTER);
  text(`You scored`, width / 2, height / 4);
  fill(255, 0, 0);
  textSize(50);
  text(`\n${score}`, width / 2, height / 4);
  if (score < 150) {
    scoville = "Mild"
  } else if ((score >= 150) && (score < 300)) {
    scoville = "Medium"
  } else if ((score >= 300) && (score < 450)) {
    scoville = "Hot"
  } else if ((score >= 450) && (score < 600)) {
    scoville = "Extra Hot"
  } else if ((score >= 600) && (score < 750)) {
    scoville = "Extremely Hot"
  } else {
    scoville = "Fire"
  }
  textSize(25);
  text(`\n\nYour spice level is ${scoville}!`, width/2 , height /3);
  sco = loadImage('imgs/scoville.png');
  image(sco, width / 2, 9 * height / 10);
  fill(255, 255, 255);

  // if (score < 25) {
  //   scoville = "Mild"
  //   pep_img =
  // } else if ((score >= 25) && (score < 50)) {
  //   scoville = "Medium"
  //   pep_img = 
  // } else if ((score >= 50) && (score < 75)) {
  //   scoville = "Hot"
  // } else if ((score >= 75) && (score < 100)) {
  //   scoville = "Extra Hot"
  // } else if ((score >= 100) && (score < 125)) {
  //   scoville = "Extremely Hot"
  //   pep_img =
  // } else {
  //   scoville = "Fire"
  //   pep_img =
  // }
  // textSize(25);
  // text(`Your spice level is ${scoville}`, width/2 , height /3);
  // add image here
  textSize(25);
  fill(255, 255, 255)
  text(`Hit space to play again`, width / 2, height / 2);
}


      
function keyPressed() {
  if ((key === ' ') || (key === 's')) {
    // doodler.jump();
    setup();
    loop();
  } else if (key === 'J' || key === "j") {
    noodler.change_img(loadImage('imgs/ramen_spicier.png'), loadImage('imgs/ramen_spicier_reverse.png'))
  } else if (key === 'M' || key === "m") {
    noLoop();
    charSet();
  } else if (key === 'K' || key === "k") {
    noodler.change_img(loadImage('imgs/ramen.png'), loadImage('imgs/ramen_reverse.png'))
  }
}
