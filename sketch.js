
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, ground, paper;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 390, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	box1 = new Box(200, 340, 200, 20);
		 
	box2 = new Box(290, 300, 20, 100);
		 
	box3 = new Box(100, 300, 20, 100);
	
	paper = new Paper(0, 370)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();

  paper.display();
  
  drawSprites();
 




}

function keyPreesed() {
	if(keyCode === UP_ARROW)
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85})
}