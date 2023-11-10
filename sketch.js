
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,floor,leftSideBin,rightSideBin;

function preload(){
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	let options = {
isStatic:true
	}

let options2 = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
}

	//Create the Bodies Here.
ball = Bodies.circle(250,150,30,options2)
World.add(world,ball);

	Engine.run(engine);

	groundObj=new Ground(width/2,670,width,20); 
	leftSide = new Ground(1100,600,20,120); 
	rightSide = new Ground(1350,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display(); 
  leftSide.display(); 
  rightSide.display();
ellipse(ball.position.x,ball.position.y,30)

 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); 
} }


