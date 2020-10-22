//??can u help
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
     rectMode(CENTER)
	packageSprite=createSprite(width/2, 210, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 9 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	

	//rectMode(CENTER);
   box1 = new Box(400,650,200,20);
   //box1.shapeColor="red"
   box2 = new Box(305,630,20,70);
   //box2.shapeColor="red"
   box3 = new Box(499,630,20,70);
   //box3.shapeColor="red"
   



	//Engine.run(engine)
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY)
  box1.display();
  box2.display();
  box3.display();
  
  keyPressed();
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	
    
    
  }
}//Actually I didn't get your point p
//wait let me show you the actualoutput
//its depends upon box position you can use any position
//not getting you this is not the answer i can give to student
//it is very basic query?
// ok ma'am give me some time I will update you with explanation on your email id is it ok?

//no actually i m in touch with two persons of your team everyone one is giving me same answer can you help me 
//sure ma'am please give me a chance
//can u discuss with your team i m sure this is very basic no I am not discuss with team I just match the code with curriculum code
//dear curriculum code and this code is different student have mae this 
//tell me how can u help me in this 
// there fore I said to you some position related differences so it is 
//not getting you 
//i am very dissapointed that no body is there who can help us
//how can we give quality sessions I just say you give me time
//ok so how can u help do u have tis code
//how to send u? upload on github and the share that repository
//that i know 
//ok let me add wait
ya sure



 
	

  



