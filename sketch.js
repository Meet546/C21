var fixedRect, movingRect;
var car, wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(300,400,60,40)
  car.shapeColor="blue";
  wall = createSprite(300,400,60,40)
  wall.shapeColor="orange";
}

function draw() {
  background(0,0,0);  
  car.x = World.mouseX;
  car.y = World.mouseY;

 if(isTouching(car,wall)){
  car.shapeColor="black";
wall .shapeColor="black"
 }
 else{
  car.shapeColor = "blue";
wall.shapeColor = "orange";
 }
  drawSprites();
}
