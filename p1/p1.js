function Body(tempXPos, tempYPos, tempWidth, tempHeight, inputShape) {
    this.initXPos = tempXPos;
    this.initYPos = tempYPos;
    this.xPos = tempXPos;
    this.yPos = tempYPos;
    this.initWidth = tempWidth;
    this.initHeight = tempHeight;
    this.shape = inputShape;
    this.glow = (153, 255, 255);
    
    this.initTime = millis();
    this.aniTime = 9000;
    this.speed = 3.0;
    
    this.chestRadius = 30;
    this.legRadius = 50;
    
    this.animate = function() {
  rectMode(CENTER);
    noFill();
    
    if(this.shape === 1) {
      stroke(153, 255, 255);
      ellipse(this.xPos, this.yPos, this.shapeWidth, this.shapeHeight, this.legRadius);  
    }
    else if(this.shape === 2) {
      stroke(153, 255, 255);
      rect(this.xPos, this.yPos, this.shapeWidth, this.shapeHeight, this.legRadius); 
    }
    else if(this.shape === 3) {
      strokeWeight(3);
      stroke(153, 255, 255);
      rect(this.xPos, this.yPos, this.shapeWidth, this.shapeHeight, this.chestRadius);
    }
    else if(this.shape === 4) {
      stroke(153, 255, 255);
      rect(this.xPos, this.yPos, this.shapeWidth, this.shapeHeight, this.chestRadius);
    }
    
    
    if(millis() < this.initTime + this.aniTime) {
       
       if(this.shape === 1) {
         this.shapeWidth = this.shapeWidth + this.speed*0.11;
       this.shapeHeight = this.shapeHeight + this.speed*0.11;
       }
       else if(this.shape === 2) {
         this.shapeWidth = this.shapeWidth + this.speed*0.11;
         this.shapeHeight = this.shapeWidth + this.speed*10;
       }
       else if(this.shape === 3) {
         this.xPos = this.xPos - this.speed*0.1;
       }
       else if(this.shape === 4) {
         this.xPos = this.xPos + this.speed*0.1;
       }
    }
    else {
      this.initTime = millis(); 
      this.shapeWidth = this.initWidth; 
      this.shapeHeight = this.initHeight; 
      this.xPos = this.initXPos;

    }
  }
}

function Self(inputPic, x1, y1, aniType) {
    this.picture = inputPic;
    this.x = x1;
    this.y = y1;
    
    this.initX= x1;
    this.initY= y1;
    
    this.type = aniType;
    
    this.initWidth = this.picture.width;
    this.initHeight = this.picture.height;
    
    this.rotation = 0;
    this.speed = 1.5
    
    this.animate = function() {
      rectMode(CENTER);
    if (this.type === 1) {
      push();
       translate(this.x + this.picture.width/2, this.y + this.picture.height/2);
       rotate(this.rotation);
       translate(-this.picture.width/2, -this.picture.height/2);
       image(this.picture, 100, 100);
       pop();
       this.rotation = this.rotation + random(0.15);
    }
    else if (this.type === 2) {
      push();
       translate(this.x + this.picture.width/5, this.y + this.picture.height/5);
       rotate(this.rotation);
       translate(-this.picture.width/5, -this.picture.height/5);
       image(this.picture, 1, 1);
       pop();
       this.rotation = this.rotation + random(0.15);
    }
    else if (this.type === 3) {
      push();
     translate(this.x + this.picture.width/5, this.y + this.picture.height/5);
     rotate(this.rotation);
     translate(-this.picture.width/5, -this.picture.height/5);
     image(this.picture, 1, 1);
     pop();
     this.rotation = this.rotation + random(0.20);
    }
    }
    
}

function Words(inputX, inputY, inputWord, inputColor, inputSize, inputFont) {
    this.x = inputX;
    this.y = inputY;
    this.message = inputWord;
    this.c = inputColor;
    this.size = inputSize;
    this.fallDir = 1;
    
    this.theFont = inputFont;
    
    this.initTime = startTime;
    this.aniTime = 4500;
    
    this.speed = 1.5;
    
    this.counter = 0;
    
    this.animate = function() {
      textSize(this.size);
      if(millis() % 3 == 0)
      {
        fill(2, 2, 50);
      }
      else {
        if(this.c === 1) {
      fill(153, 255, 51);
        } else if(this.c === 2) {
          fill(229, 204, 255);
        } else if(this.c === 3) {
          fill(233, 233, 233);
        } else if(this.c === 4) {
          fill(255, 255, 204);
        }
      }
      textFont(this.theFont);
      text(this.message, this.x, this.y, 10);
      
      if(millis() < this.iniTime + this.aniTime) {
     
             if(this.fallDir == 1) {
               this.y = this.y+3;
             }
             else {
              this.y = this.y-3; 
             }  
          }
          else {
          
            
            
            this.y = this.y + this.speed*0.5;
            this.fallDir = this.fallDir * -1;
            initTime = millis();
            
          }
          
          
          
          
        }
        
        
}




var head, chest, leg1, leg2;
var b, h, m, k;
var w1, w2, w3, w4;

var heart;
var mouse;
var keyboard;
var brain;

var myFont;

var startTime;
var crossTime = 4500;
var crossTime2 = 9000;

var mill;

function preload() {
   myFont = loadFont("Sablon_Up_Outline.otf");
}

function setup() {
  createCanvas(1000, 1000);
  background(2, 2, 50);
  
  brain = loadImage("brain.png");
    heart = loadImage("heart.png");
    keyboard = loadImage("keyboard.png");
    mouse = loadImage("mouse.png");
    
    b = new Self(brain, 425, 100, 1);
    h = new Self(heart, 500, 300, 2);
    k = new Self(keyboard, 450, 600, 3);
    m = new Self(mouse, 575, 700, 3);
    
    head = new Body(500, 200, 0, 0, 1);
   chest = new Body(500, 400, 0, 0, 2);
   leg1 = new Body(450, 700, 50, 300, 3);
   leg2 = new Body(550, 700, 50, 300, 4); 
   
   w1 = new Words(0, 100, "brains", 1, 55, myFont);
   w2 = new Words(150, 100, "love", 2, 55, myFont);
   w3 = new Words(600, 100, "and", 3, 55, myFont);
   w4 = new Words(700, 100, "machines", 4, 55, myFont);
   
   startTime = millis();
   
   mill = millis();
   
   
}


function draw() {
  clear();
  
  background(2, 2, 50);

  w1.animate();

  w2.animate();

  w3.animate();

  w4.animate();
  
  
  if(millis() > crossTime + startTime) {
  b.animate();
  h.animate();
  k.animate();
  m.animate();
  }
  
  if(millis() > crossTime2 + startTime) {
  head.animate();
  chest.animate();
  leg1.animate();
  leg2.animate();
  }
  
 
  
  
  
  
}
