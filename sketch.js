var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(50,200,60,20);
  bullet.shapeColor="white";
  weight = Math.round(random(30,52));
    speed = Math.round(random(223,245));
    thickness = random(22,83);
    bullet.velocityX = speed;
}

function draw() {
  background(0);

  


  if(isTouching(bullet,wall)) {
    wall.width=thickness;

    bullet.velocityX=0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
     
    if(damage>10) {
    wall.shapeColor="red";
    }

    if(damage<10) {
      wall.shapeColor="green";
    }

    
  }
  drawSprites();
}

function isTouching(obj1,obj2) {
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 &&
      obj2.x-obj1.x<obj1.width/2+obj2.width/2 && 
      obj1.y-obj2.y<obj1.height/2+obj2.height/2 && 
      obj2.y-obj1.y<obj1.height/2+obj2.height/2) 
      return true;
  
  return false;
}

  
  


