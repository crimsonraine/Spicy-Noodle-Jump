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
  textAlign(CENTER);
  text(`M for menu and J/j
for a different ramen!
(Trial Version)


Space/s to restart!
References: codeheir.com
`, width / 2, height / 2);
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
    textSize(30);
    textAlign(CENTER);
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
  
  textSize(20);
  image(bg, 0, 0);
  textAlign(CENTER);
  text(`You scored ${score}`, width / 2, height / 4);
  if (score < 25) {
    scoville = "Mild"
  } else if ((score >= 25) && (score < 50)) {
    scoville = "Medium"
  } else if ((score >= 50) && (score < 75)) {
    scoville = "Hot"
  } else if ((score >= 75) && (score < 100)) {
    scoville = "Extra Hot"
  } else if ((score >= 100) && (score < 125)) {
    scoville = "Extremely Hot"
  } else {
    scoville = "Fire"
  }
  textSize(25);
  text(`Your spice level is ${scoville}!`, width/2 , height /3);
  sco = loadImage('Scoville Chart.png');
  image(sco, 0, 0 );
  textSize(25);
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
    charSet();
    noLoop();
  }
}