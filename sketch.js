
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boy = loadImage("Plucking mangoes/boy.png")
tree = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,690,1200,10)
  mango1 = new Mango(1000,400,50)
  mango2 = new Mango(900,400,50)
  mango3 = new Mango(1050,450,50)
  mango4 = new Mango(1200,400,50)
  mango5 = new Mango(950,400,50)
  mango6 = new Mango(1000,350,50)
  stone = new Stone(300,500,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  stone.display()
  image(boy,200,340,200,300)
  image(tree,700,200,450,550)
  ground.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  
  drawSprites();
 
}



