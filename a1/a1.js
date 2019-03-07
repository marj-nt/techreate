let img_me;
let img_hamster;
let img_tacos;
let img_zlink;
let img_ucsd;
let img_gamecube;
let img_ball;
let img_cartoon;
let img_design1;
let img_design2;
let img_candy;

var counter = 1;

let c;
let c_sharp;
let d;
let d_sharp;
let e;
let f;
let f_sharp;
let g;
let a_flat;
let a;
let b_flat;
let b;
let c2;



var value = 0;

function setup() {
   createCanvas(1000, 700);
   background(255, 204, 0);
   
   var rX = random(1000);
var rY = random(700);

   
   img_hamster = loadImage("hamster.png");
   img_tacos = loadImage("tacos.png");
   img_zlink = loadImage("link.png");
   img_ucsd = loadImage("ucsd.png");
   img_gamecube = loadImage("gamecube.png");
   img_me = loadImage("me.png");
   img_ball = loadImage("ball.png");
   img_cartoon = loadImage("cartoon.png");
   img_design1 = loadImage("design1.jpg");
   img_design2 = loadImage("design2.jpg");
   img_candy = loadImage("candy.png");
   
   c = loadSound("c.wav");
   c_sharp = loadSound("c_sharp.wav");
   d = loadSound("d.wav");
   d_sharp = loadSound("d_sharp.wav");
   e = loadSound("e.wav");
   f = loadSound("f.wav");
   f_sharp = loadSound("f_sharp.wav");
   g = loadSound("g.wav");
   a_flat = loadSound("a_flat.wav");
   a = loadSound("a.wav");
   b_flat = loadSound("b_flat.wav");
   b = loadSound("b.wav");
   c2 = loadSound("c2.wav");
}


function draw() {
drawPiano();
}

var x;
var x2;

function drawPiano() {
   x = 200;
   
   
   for(var count = 0; count < 8; count = count + 1) {
     drawWhiteKey(x);
     x=x+75;
   }
   
   x2 = 250;
   
   for(var count2 = 0; count2 <6; count2 = count2 + 1) {
     if (count2 === 2 || count2 === 6) {
        x2 = x2 + 75;
     }
     if (count2 != 3) {
       drawBlackKey(x2);
       x2 = x2 + 75;
     }
     
   }
   
}

function drawWhiteKey(x) {
   noFill();
   strokeWeight(5);
   stroke(255, 255, 255);
   rect(x, 200, 75, 300);
}

function drawBlackKey(x) {
   fill(128, 0, 128);
   rect(x2, 200, 50, 150); 
}

function keyPressed() {
  
 if (key === 'a') {
   
   background(153, 51, 255);
   
   
   
   for(var i = 0; i < 20; i = i + 1) {
     rX = random(1000);
     rY = random(700);
     cartoon(rX, rY);
   }
   image(img_me, 200, 400);
   c.play();
   
 }
 
 if (key === 'w') {
   
   background(0, 0, 0);
   
   image(img_me, 240, 100);
   c_sharp.play();
   
 }
 
 if(key === 's') {
   background(200, 0, 200);
   
   
   
   for(var i = 0; i < 5; i = i + 1) {
     rX = random(1000);
     rY = random(700);
   design1(rX, rY);
   }
   for(var i = 0; i < 5; i = i + 1) {
     rX = random(1000);
     rY = random(700);
   design2(rX, rY);
   }
   image(img_me, 275, 400);
   d.play();
   
 }
 
 if (key === 'e') {
   background(0, 0, 0);

   image(img_me, 315, 100);
   d_sharp.play();
   
 }
 
 if(key === 'd') {
   
   
   
   background(145, 0, 255);
   for(var i = 0; i < 20; i = i + 1) {
     rX = random(1000);
     rY = random(700);
   ucsd(rX, rY);
   }
   image(img_me, 350, 400);
   e.play();
   
 }
 if(key === 'f') {
   background(188, 132, 212);
   for(var i = 0; i < 20; i = i + 1) {
     rX = random(1000);
     rY = random(700);
   tacos(rX, rY);
   }
   image(img_me, 425, 400);
   f.play();
   
 }
 
 if(key === 't') {
   background(0, 0 ,0);

   image(img_me, 465, 100);
   f_sharp.play();
   
 }
 
 if(key === 'g') {
   background(174, 65, 220);
   for(var i = 0; i < 20; i = i + 1) {
     rX = random(1000);
     rY = random(700);
   gamecube(rX, rY);
   }
   image(img_me, 500, 400);
   g.play();
   
 }
 
 if(key === 'y') {
   background(0, 0, 0);

   image(img_me, 540, 100);
   a_flat.play();
   
 }
 
 if(key === 'h') {
   background(153, 51, 255);
   for(var i = 0; i < 20; i = i + 1) {
     rX = random(1000);
     rY = random(700);
   hamster(rX, rY);
   }
   image(img_me, 575, 400);
   a.play();
   
 }
 
 if(key === 'u') {
   background(0, 0, 0);

   image(img_me, 615, 100);
   b_flat.play();
   
 }
 
 if(key === 'j') {
   background(123, 51, 230);
   for(var i = 0; i < 20; i = i + 1) {
     rX = random(1000);
     rY = random(700);
   ball(rX, rY);
   }
   image(img_me, 650, 400);
   b.play();
   
 }
 if(key === 'k') {
   background(255, 82, 203);
   for(var i = 0; i < 20; i = i + 1) {
     rX = random(1000);
     rY = random(700);
   candy(rX, rY);
   }
   image(img_me, 725, 400);
   c2.play();
   
 }
}

function hamster(rX, rY) {
  
  image(img_hamster, rX, rY);
}

function tacos(rX, rY) {
  
  image(img_tacos, rX, rY);
  
}

function zlink(rX, rY) {
  
  image(img_zlink, rX, rY);
  
}

function ucsd(rX, rY) {
  
  image(img_ucsd, rX, rY);
  
}

function gamecube(rX, rY) {
  
  image(img_gamecube, rX, rY);
  
}

function ball(rX, rY) {
  
  image(img_ball, rX, rY);
  
}

function cartoon(rX, rY) {
  
  image(img_cartoon, rX, rY);
  
}

function design1(rX, rY) {
  
  image(img_design1, rX, rY);
  
}

function design2(rX, rY) {
  
  image(img_design2, rX, rY);
  
}

function candy(rX, rY) {
  
  image(img_candy, rX, rY);
  
}
