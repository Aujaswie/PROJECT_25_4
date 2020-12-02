var ball,ground;
var box1,box2,box3;
var paper1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	var canvas=createCanvas(1200,800);
	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,795,1200,20);
	paper1 = new Paper(100,645,40);
	box1=new dustbin (600,680,110,110)
	box2=new dustbin (605,725,15,100)
	box3=new dustbin (690,725,15,100)
	
  
}


function draw() {
  background(0);
  Engine.update(engine);
 

 box3.display();
 box2.display();
 box1.display();
 paper1.display();

 ground1.display();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-5});
  }
}








