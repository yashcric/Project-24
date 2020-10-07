
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, Ground1, dustbin1;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new paper(200,450, 40);
	dustbin1 = new dustbin(700,650);
Ground1 = new ground(width/2,670,1200,20);
	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  console.log(paperBall.y,paperBall.x);
  paperBall.display();
  paperBall.shapeColor="pink";
  dustbin1.display();
  
	Ground1.display();
	if (keyPressed=== true){
		keyPressed();
	}
  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:60,y:-60});
	}
}

