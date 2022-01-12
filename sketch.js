var trex, trexRunning;

function preload() {
  // Loading trex animation
  trexRunning = loadAnimation("trex1.png", "trex2.png", "trex3.png");
}

function setup() {
  createCanvas(600, 200);

  // create trex Sprite & add animation to it
  // NOTE: checkout Step 1 image inside screenshots folder



  // adding scale to trex
  // NOTE: checkout Step 2 image inside screenshots folder
  
  
  //Create a Ground Sprite


}

function draw() {
  //set background color
  background("white");

  //jump when space key is pressed
  // NOTE: checkout Step 4 image inside screenshots folder

  // Add gravity to trex Sprite
  // NOTE: checkout Step 3 image inside screenshots folder

  
  //Collide the trex with ground
  
  drawSprites();
}
