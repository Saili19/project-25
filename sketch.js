var box1,box2,box3;
var ball ;
 var floor;
var world,engine;
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	 

	engine = Engine.create();
	world = engine.world;

	 
	box3 = new Box (550,600,200,20);
	box1= new Box (550,570,20,200);
	 

    floor = new Floor(400,680,810,10);
 
   ball = new Paper(60,400);
    
	Engine.run(engine);
  
}


function draw() {
  background(104,107,115);
  Engine.update(engine);
  keyPressed();
 
 
 floor.display();
 box3.display();
 ball.display();
   
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode ===UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position,{x:30,y: -30 });


	}
}


