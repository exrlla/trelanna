// Be sure to name any p5.js functions/variables we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global circle, square, angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, resizeCanvas, pow, sqrt, lerpColor, push, pop, ellipse, stroke, image, loadImage, collidePointCircle, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          keyCode, PI, isEqual, dist, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, loadSound, textAlign, CENTER, textFont, loadFont, 
          textWrap, WORD, createSprite, drawSprites, noCursor, TOP, frameRate, second*/

//creation of global variables

//need mouseDrag()
//check for collision between seed and mouseX and mouseY
//update position of mouseX and mouseY if true make seed follow cursor
//if let go, it should come back
//bounce back to original place if not placed corectly
//change position of seed
//mouseRelease- let go of seed
//mousedrag 
//mouseX and mouseY
//mouseRelease check seed is in boundary-if true, check if its in the soil and update position to a specific location and if false, update back to where it was

//add circle under seed

let song;
let songIsPlaying;

let font;

let seed1Image;
let seed1Sprite;
let seed1;

let seed2Image;
let seed2Sprite;
let seed2;

let seed3Image;
let seed3Sprite;
let seed3;

let groundImage;
let groundSprite;

let chosenSeed;

let seedFert;
let seedWater;
let seedFlute;

let nextLoop;
let loopDone;


let fertCount;
let waterCount;
let fluteCount;

let fertImage;
let fertSprite;

let waterImage;
let waterSprite;

let fluteImage;
let fluteSprite;

let page;

let firstStop;

// let Omusic;
// let Ymusic;
// let Pmusic;
// let Bmusic;

// let rain;

let flower1P1;
let flower1P2;
let flower1P3;
let flower1P4;

let flower1P1S;
let flower1P2S;
let flower1P3S;
let flower1P4S;

let flower2P1;
let flower2P2;
let flower2P3;
let flower2P4;

let flower2P1S;
let flower2P2S;
let flower2P3S;
let flower2P4S;

let flower3P1;
let flower3P2;
let flower3P3;
let flower3P4;

let flower3P1S;
let flower3P2S;
let flower3P3S;
let flower3P4S;

// let OmusicS;
// let YmusicS;
// let PmusicS;
// let BmusicS;

// let rainS;

function preload() {
  
  song = loadSound("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2FProhectFileACBg.mp3?v=1627955675405"); // In parenthesis add in assets sound file
 
  font = loadFont("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2FHey%20Comic.ttf?v=1627956828337"); // In parenthesis add in assets text file
  
  seed1Image = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2F63EC423E-E04B-4E66-B349-D2F9DE2E17FE.png?v=1628029892091"); // In parenthtesis add in picture of seed
  seed2Image = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2F54924444-1799-459F-BDED-0AD081386DE9.png?v=1628029910935"); //loading image
  seed3Image = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2F13671C49-D241-4E8D-BF71-0CBC70872A26.png?v=1628029924710"); //loading image
  
  groundImage = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2F1499F598-D573-49CF-B242-08A14629CB20.png?v=1628030197283"); //loading image
  
  fertImage = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2F96BB7781-9812-470A-BB55-536C9CB2DEEF.png?v=1627950133903"); //loading image
  waterImage = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2F1C616B8B-A558-439A-9B30-30467835FA0B.png?v=1627950144468"); //loading image
  fluteImage = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2F26D08D77-718D-4E6E-9F1C-54771BAD414A.png?v=1627950151609"); //loading image
  
//   Omusic = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2FOorangeMusic.png?v=1628165837852");
//   Ymusic = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2FyellowMusic.png?v=1628165844938");
//   Pmusic = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2FpinkishMusic.png?v=1628165853763");
//   Bmusic = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2FblueMusic.png?v=1628165861235");
  
//   rain = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2FrainDrop.png?v=1628165849044");
  
  flower1P1 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fsunflower_phase1.png?v=1628032666507");
  flower1P2 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fsunflower_phase2.png?v=1628032683548");
  flower1P3 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fsunflower_phase3.png?v=1628032695653");
  flower1P4 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fsunflower_phase4.png?v=1628032707169");
  
  flower2P1 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fpeony_phase1.png?v=1628207350065");
  flower2P2 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fpeony_phase2.png?v=1628207357060");
  flower2P3 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fpeony_phase3.png?v=1628207377042");
  flower2P4 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fpeony_phase4.png?v=1628207386404");
  
  flower3P1 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fdahlia_phase1.png?v=1628209275723");
  flower3P2 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fdahlia_phase2.png?v=1628209293586");
  flower3P3 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fdahlia_phase3.png?v=1628209309670");
  flower3P4 = loadImage("https://cdn.glitch.com/41f6de32-a564-4306-b1b7-fc75be65e3b7%2Fdahlia_phase4.png?v=1628209330386");
  
}

// function for initializing 
function setup() {
  
  createCanvas(windowWidth, windowHeight); //creating canvas to window size
  
  groundSprite = createSprite(windowWidth/2, windowHeight-((windowWidth/2360)*(1640/2))); // creates and places sprite
  groundSprite.addImage(groundImage); // adds image to the previously created sprite
  groundSprite.scale = (windowWidth/2360); //scale of the image
  
  seed1Sprite = createSprite(windowWidth/3, windowHeight/2); // creates and places sprite
  seed1Sprite.addImage(seed1Image); // adds image to the previously created sprite
  seed1Sprite.scale = (windowHeight/4)/2048; //scale of the image
  
  seed2Sprite = createSprite(windowWidth*2/3-windowWidth/6, windowHeight/2); // creates and places sprite
  seed2Sprite.addImage(seed2Image); // adds image to the previously created sprite
  seed2Sprite.scale = (windowHeight/4)/2048;; //scale of the image
  
  seed3Sprite = createSprite(windowWidth-windowWidth/3, windowHeight/2); // creates and places sprite
  seed3Sprite.addImage(seed3Image); // adds image to the previously created sprite
  seed3Sprite.scale = (windowHeight/4)/2048;; //scale of the image
  
  fertSprite = createSprite(windowWidth-windowWidth/12, windowHeight/3); // creates and places sprite
  fertSprite.scale = (windowHeight/6)/980; //scale of the image
  
  waterSprite = createSprite(windowWidth-windowWidth/12, windowHeight/2); // creates and places sprite
  waterSprite.scale = (windowHeight/6)/980; //scale of the image
  
  fluteSprite = createSprite(windowWidth-windowWidth/12, windowHeight/6); // creates and places sprite
  fluteSprite.scale = (windowHeight/6)/980; //scale of the image
  
  flower1P1S = createSprite(windowWidth-windowWidth/2, windowHeight-windowHeight/5); // creates and places sprite
  flower1P1S.scale = (windowHeight/6)/1640; //scale of the image
  
  flower1P2S = createSprite(windowWidth-windowWidth/2, windowHeight-windowHeight/5); // creates and places sprite
  flower1P2S.scale = (windowHeight/6)/1440; //scale of the image
  
  flower1P3S = createSprite(windowWidth-windowWidth/2, windowHeight-windowHeight/4); // creates and places sprite
  flower1P3S.scale = (windowHeight/6)/940; //scale of the image
  
  flower1P4S = createSprite(windowWidth-windowWidth/2, windowHeight-windowHeight/3); // creates and places sprite
  flower1P4S.scale = (windowHeight/6)/840; //scale of the image
  
   
  flower2P1S = createSprite(windowWidth-windowWidth/2.25, windowHeight-windowHeight/6.2); // creates and places sprite
  flower2P1S.scale = (windowHeight/6)/1640; //scale of the image
  
  flower2P2S = createSprite(windowWidth-windowWidth/2.25, windowHeight-windowHeight/6.2); // creates and places sprite
  flower2P2S.scale = (windowHeight/6)/1240; //scale of the image
  
  flower2P3S = createSprite(windowWidth-windowWidth/2.25, windowHeight-windowHeight/4.3); // creates and places sprite
  flower2P3S.scale = (windowHeight/6)/840; //scale of the image
  
  flower2P4S = createSprite(windowWidth-windowWidth/2.25, windowHeight-windowHeight/4.3); // creates and places sprite
  flower2P4S.scale = (windowHeight/6)/840; //scale of the image
  
  
  flower3P1S = createSprite(windowWidth-windowWidth/2.25, windowHeight-windowHeight/5); // creates and places sprite
  flower3P1S.scale = (windowHeight/6)/1640; //scale of the image
  
  flower3P2S = createSprite(windowWidth-windowWidth/2.25, windowHeight-windowHeight/5); // creates and places sprite
  flower3P2S.scale = (windowHeight/6)/1240; //scale of the image
  
  flower3P3S = createSprite(windowWidth-windowWidth/2.25, windowHeight-windowHeight/4); // creates and places sprite
  flower3P3S.scale = (windowHeight/6)/840; //scale of the image
  
  flower3P4S = createSprite(windowWidth-windowWidth/2.25, windowHeight-windowHeight/4); // creates and places sprite
  flower3P4S.scale = (windowHeight/6)/840; //scale of the image
  
//   OmusicS = createSprite(windowWidth-windowWidth/6, windowHeight/2); // creates and places sprite
//   OmusicS.scale = (windowHeight/12)/500; //scale of the image
  
//   YmusicS = createSprite(windowWidth/2-windowWidth/6, windowHeight/2); // creates and places sprite
//   YmusicS.scale = (windowHeight/12)/500; //scale of the image
  
//   PmusicS = createSprite(windowWidth/4-windowWidth/6, windowHeight/4); // creates and places sprite
//   PmusicS.scale = (windowHeight/12)/500; //scale of the image
  
//   BmusicS = createSprite(windowWidth*3/4-windowWidth/6, windowHeight/4); // creates and places sprite
//   BmusicS.scale = (windowHeight/12)/500; //scale of the image
  
  songIsPlaying = false; //setting to false to later be set to true
  
  nextLoop = 0; //initializing with value
  loopDone = 0; //initializing with value
 
  
  fertCount = 0; //initializing with value
  waterCount = 0; //initializing with value
  fluteCount = 0; //initializing with value
  
  seedFert = 0; //initializing with value
  seedWater = 0; //initializing with value
  seedFlute = 0; //initializing with value
  
  chosenSeed = 0; //initializing with value
  
  page = 1; //initializing with value and setting to welcome page
  
  firstStop = 0; //setting to 0 so when it changes to 1 the if statement doesn't repeat
  
  fertSprite.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  waterSprite.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  fluteSprite.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  
  flower1P1S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  flower1P2S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  flower1P3S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  flower1P4S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  
  flower2P1S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  flower2P2S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  flower2P3S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  flower2P4S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  
  flower3P1S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  flower3P2S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  flower3P3S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  flower3P4S.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  
  // OmusicS.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  // YmusicS.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  // PmusicS.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  // BmusicS.shapeColor = color(187, 237, 140, 0); //sets color of placeholder box
  
}

function draw() {
 
  background(187, 237, 140); //green color rgb
  
  if (page === 1){
    
  welcomePage(); // calling the functino welcome page
    
  }else if (page === 2){
  
  growingPage(); // calling the growing page
  
  } 

}

//function containing all of welcome page
function welcomePage() {
  
  textFont(font); //setting font
  textSize(height/16); // setting size
  textWrap(WORD); // text wrapping when window is resized
  textAlign(CENTER, TOP); // aligning text in the center of screen
  text("Trelanna", 0, windowHeight/24, windowWidth, windowHeight-windowHeight/16); //writes the text
  text("\n Welcome! Choose a seed to get started, and plant it below!", 0, windowHeight/24, windowWidth, windowHeight-windowHeight/16); // text and location by textbox)
  
  drawSprites(); //draws the seeds and ground
  
  noFill();
  noStroke();
  
}

function growingPage(){
  
  textFont(font); //setting font
  textSize(height/16); // setting size
  textWrap(WORD); // text wrapping when window is resized
  textAlign(CENTER, TOP); // aligning text in the center of screen
  text("Help your plant grow!", 0, windowHeight/30, windowWidth, windowHeight-windowHeight/16); //writes the text
  
  seed1Sprite.remove(seed1Image); //remove the image of the seeds
  seed2Sprite.remove(seed2Image); //remove the image of the seeds
  seed3Sprite.remove(seed3Image); //remove the image of the seeds
   
  if (chosenSeed === 1){
    
    if (loopDone === 1){
      
      //add first animation
      flower1P1S.addImage(flower1P1);
      
    } else if (loopDone === 2){
      
      //add second animation
      flower1P1S.remove(flower1P1);
      flower1P2S.addImage(flower1P2);
      
      //flower1P1S.changeImage(flower1P2);
      
    } else if (loopDone === 3){
      
      //add their animation
      flower1P2S.remove(flower1P2);
      flower1P3S.addImage(flower1P3);
      
    } else if (loopDone === 4) {
      
      //add in fourth animation
      flower1P3S.remove(flower1P3);
      flower1P4S.addImage(flower1P4);
      
      
    }
    
  } else if (chosenSeed === 2){
    
  if (loopDone === 1){
      
      //add first animation
      flower2P1S.addImage(flower2P1);
      
    } else if (loopDone === 2){
      
      //add second animation
      flower2P1S.remove(flower2P1);
      flower2P2S.addImage(flower2P2);
      
      //flower2P1S.changeImage(flower2P2);
      
    } else if (loopDone === 3){
      
      //add their animation
      flower2P2S.remove(flower2P2);
      flower2P3S.addImage(flower2P3);
      
    } else if (loopDone === 4) {
      
      //add in fourth animation
      flower2P3S.remove(flower2P3);
      flower2P4S.addImage(flower2P4);
      
    }
    
  } else if (chosenSeed === 3){
    
    
    if (loopDone === 1){
      
      //add first animation
      flower3P1S.addImage(flower3P1);
      
    } else if (loopDone === 2){
      
      //add second animation
      flower3P1S.remove(flower3P1);
      flower3P2S.addImage(flower3P2);
      
      //flower3P1S.changeImage(flower3P2);
      
    } else if (loopDone === 3){
      
      //add their animation
      flower3P2S.remove(flower3P2);
      flower3P3S.addImage(flower3P3);
      
    } else if (loopDone === 4) {
      
      //add in fourth animation
      flower3P3S.remove(flower3P3);
      flower3P4S.addImage(flower3P4);
     
      
    }
    
  } 
    
   if (firstStop === 0){ 
     
  //at most 15 clicks, at least 6 clicks
    seedFert = random(3,5); //setting to a random number of clicks
    seedWater = random(3,5); //setting to a random number of clicks 
    seedFlute = random(3,5); //setting to a random number of clicks
    loopDone = 1; // once ran, sets to one to say done and go to next loop
    firstStop = 1; //sets to one to make sure doen't repeat
     
   }
  
  if (loopDone === 1 && seedFert < fertCount && seedWater < waterCount && seedFlute < fluteCount ){
    
   //at most 27 clicks, at least 18 clicks
    seedFert = random(6,9); //setting to a random number of clicks
    seedWater = random(6,9); //setting to a random number of clicks
    seedFlute = random(6,9); //setting to a random number of clicks
    loopDone = 2; // once ran, sets to two to say done and go to next loop
    fertCount = 0; // resets the amount of clicks
    waterCount = 0; // resets the amount of clicks
    fluteCount = 0; // resets the amount of clicks
    
  } else if (loopDone === 2 && seedFert < fertCount && seedWater < waterCount && seedFlute < fluteCount ){
    
   //at most 45 clicks, at least 36 clicks
    seedFert = random(12,15); //setting to a random number of clicks
    seedWater = random(12,15); //setting to a random number of clicks
    seedFlute = random(12,15); //setting to a random number of clicks
    loopDone = 3; // once ran, sets to three to say done and go to next loop
    fertCount = 0; // resets the amount of clicks
    waterCount = 0; // resets the amount of clicks
    fluteCount = 0; // resets the amount of clicks
  
  } else if (loopDone === 3 && seedFert < fertCount && seedWater < waterCount && seedFlute < fluteCount ){
    
  //at most 120 clicks, at least 60 clicks
    seedFert = random(20,40); //setting to a random number of clicks
    seedWater = random(20,40); //setting to a random number of clicks
    seedFlute = random(20,40); //setting to a random number of clicks
    loopDone = 4; // makes sure the loop won't repeat
    fertCount = 0; // resets the amount of clicks
    waterCount = 0; // resets the amount of clicks
    fluteCount = 0; // resets the amount of clicks
    
  } 
  


  fertSprite.addImage(fertImage); // adds image to the previously created sprite
  waterSprite.addImage(waterImage); // adds image to the previously created sprite
  fluteSprite.addImage(fluteImage); // adds image to the previously created sprite
  
  noFill();
  noStroke();
  circle(windowWidth-windowWidth/12, windowHeight/3, 735*(windowHeight/6)/980); //fert circle to click
  circle(windowWidth-windowWidth/12, windowHeight/2, 735*(windowHeight/6)/980); //water circle to click
  circle(windowWidth-windowWidth/12,  windowHeight/6, 735*(windowHeight/6)/980);//flute circle to click
  
  drawSprites(); //draw the images

}


// function allowing for the window to be resized and everything to adjust
function windowResized() {
  
  resizeCanvas(windowWidth, windowHeight);
  
}

function mouseClicked(){

  //starts playing the background on mouse click
  if (songIsPlaying === false){
  
    song.setVolume(0.1);
    song.loop(); //loops the song
    songIsPlaying = true; // keeps the song playing
    
  }
  
  //fertlizer if clicked, add one to the count
  if(collidePointCircle(mouseX, mouseY, windowWidth-windowWidth/12, windowHeight/3, 735*(windowHeight/6)/980)) {
    
    fertCount += 1;
  
  }
  
  //water if clicked, add one to the count
  if(collidePointCircle(mouseX, mouseY, windowWidth-windowWidth/12, windowHeight/2, 735*(windowHeight/6)/980)) {
    
    waterCount += 1;
  
  }
 
  //flute if clicked, add one to the count
  if(collidePointCircle(mouseX, mouseY, windowWidth-windowWidth/12, windowHeight/6, 735*(windowHeight/6)/980)) {
    
    fluteCount += 1;    
    
  }
  
  if(collidePointCircle(mouseX, mouseY, windowWidth/3, windowHeight/2, 735*(windowHeight/6)/980)){
    
    page = 2;
    chosenSeed = 1;
    
  } else if(collidePointCircle(mouseX, mouseY, windowWidth*2/3-windowWidth/6, windowHeight/2, 735*(windowHeight/6)/980)){
    
    page = 2;
    chosenSeed = 2;
    
  } else if(collidePointCircle(mouseX, mouseY, windowWidth-windowWidth/3, windowHeight/2, 735*(windowHeight/6)/980)){
    
    page = 2;
    chosenSeed = 3;
    
  }

}


