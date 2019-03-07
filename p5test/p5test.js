let y = 100;
let img;
let sound;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  // createCanvas must be the first statement
  createCanvas(720, 400);
  stroke(255); // Set line drawing color to white
  frameRate(30);
  img = loadImage("hamster.png");
  sound = loadSound("c.wav");
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
  image(img, 0, 0);
}

function mouseClicked() {
  sound.play();
}
