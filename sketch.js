
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
constructor(body1,body2,offsetX,offsetY)	
{
	this.offsetX=this.offsetX
	this.offsetY=this.offsetY
	var options={
		
		pointB:{x:this.offsetX,y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rope1=new rope(bobObject1.body,roofObjects.body,bobDiameter*2,0)
	rope2=new rope(bobObject1.body,roofObjects.body,bobDiameter*2,0)
	rope3=new rope(bobObject1.body,roofObjects.body,bobDiameter*2,0)
	rope4=new rope(bobObject1.body,roofObjects.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



