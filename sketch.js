
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;


	mango1=new mango(1100,100,30);

	stone=new Stone(250,400,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	sling = new SlingShot(stone.body,{x:250,y:400});

	Engine.run(engine);
    
}

function draw() {

  background(230);

  

  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  sling.display();
 stone.display();
  groundObject.display();
}
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}
