const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bin, bin2, bin3, ball, ballIMG;
var ballBody,ground

function preload()
{
 	ballIMG = loadImage("sprites/ball.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	ballBody = new paper( 50 , 200, 5);
	
	//ball = createSprite(ballBody.position.x, ballBody.position.y , ballBody.radius)
	
	bin = new Bin(600, 600, 10, 100);
	bin2 = new Bin(650, 650, 100, 10);
	bin3 = new Bin(700, 600, 10, 100);

	//Create a Ground
	ground = new GR (width/2, 660, width, 10);
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
background("black");
 
Engine.update(engine);

ballBody.display();
bin.display();
bin2.display();
bin3.display();
ground.display();

drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ballBody.body, ballBody.body.position, {x : 2.5, y : -2.5});
	}
}


