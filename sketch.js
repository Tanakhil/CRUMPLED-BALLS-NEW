
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground1;
var log1,log2,log3;
var box1, box2, box3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(200,450,40);
    //log1=new Box(790,640,10,10)
    ground1=new Ground(400,690,1500,10);
	Engine.run(engine);
  


	box1 = new Box(900,675,240,20);
	box2 = new Box(1010,630,20,100);
	box3 = new Box(790,630,20,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
 //log1.display();
ground1.display();
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});


}



}

