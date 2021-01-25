
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var sand1, sand2, sand3, sand4, sand5, sand6;
var iron1;
var stone1;
var rubber1;
var ground;

function setup() {
	
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(200, 200);
	
	sand1 = new Sand(600, 700);
	sand2 = new Sand(625, 700);
	sand3 = new Sand(650, 700);
	sand4 = new Sand(650, 720);
	sand5 = new Sand(600, 700);
	sand6 = new Sand(620, 720);
	
	iron1 = new Iron(300, 715, 175, 70);

	stone1 = new Stone(200, 670, 100, 100, PI/4);

	rubber1 = new Rubber(500, 750);

	ground = new Ground(400, 775, 800, 50);
		
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background("lightblue");

  hammer.display();
    
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  
  iron1.display();
  rubber1.display();
  stone1.display();
  ground.display();
  
  console.log(stone1.body.position.y);

  //drawSprites();
 
}



