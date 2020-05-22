var wall,thickness; 
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

 thickness=random(22,83);
 wall=createSprite(1200,200,thickness,height/2);
 bullet=createSprite(0,200,50,10);
speed=random(10,50);
weight=random(30,52);
bullet.velocityX=speed;
}
function draw(){
  background("green");
wall.shapeColor=color(80,80,80);
if(wall.x-bullet.x <(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/20;
  if(deformation>180){
    wall.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    wall.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    wall.shapeColor=color(0,255,0);
  }
}

  
drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet1.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);

  }
  if(damage<10){
    wall.shapeColor= color(0,255,0);

  }
  
}