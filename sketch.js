var car, wall;
var speed, weight;

function preload() {}

function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1350, 200, 60, height / 2);
  wall.shapeColor = "80,80,80";
}

function draw() {
  background("black");



  if (car.collide(wall)) {

    var deformation = (0.5 * weight * speed * speed) / 22500;
    car.velocityX = 0;

    if (deformation < 100) {
      car.shapeColor = "green";
    }

    if (deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
    }

    if (deformation > 180) {
      car.shapeColor = "red";
    }
  }
  drawSprites();
}
