
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 boy=loadImage("images/boy.png")
 tree=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone1 = new stone(50,400)
ground1 = new Ground(400,690,800,10)
mango1 = new mangos(525,420)
mango2 = new mangos(565,470)
mango3 = new mangos(550,420)
mango4 = new mangos(525,400)
mango5 = new mangos(552,443)
constraint = new Launcher(stone1,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boy,100,510,120,250)
 image (tree,500,450,100,400)
 stone1.display()
 ground1.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()

 detectCollision(mango1,stone1)
 detectCollision(mango2,stone1)
 detectCollision(mango3,stone1)
 detectCollision(mango4,stone1)
 detectCollision(mango5,stone1)
}
function mouseDragged(){
     Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    }


function mouseReleased(){
    constraint.fly();
}

function detectCollision(mango,Stone){
    if(Stone.x === mango.x && Stone.y === mango.y)
    {
        Matter.Body.setStatic(mango,false)
  }
}
function keyPressed(){
    if(keyCode === 32){
        matter.body.setPosition(stone1.body,{x:50,Y:400})
        constraint.attach(stone1.body);
    }
}