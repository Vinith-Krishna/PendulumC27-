
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bar, ground;
var ball1, ball2, ball3, ball4, ball5, ball6;
var nail1, nail2, nail3, nail4, nail5, nail6;
var stand1,stand2,stand3;

function setup() {
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bar = new Bar(400,10,800,20);
  ground = new Bar(400,699,800,1);

  ball1 = new Ball(200,380,20);
  ball2 = new Ball(240,380,20);
  ball3 = new Ball(280,380,20);
  ball4 = new Ball(320,380,20);
  ball5 = new Ball(360,380,20);
  ball6 = new Ball(400,380,20);

  nail1 = new Nail(200,10,1,1);
  nail2 = new Nail(240,10,1,1);
  nail3 = new Nail(280,10,1,1);
  nail4 = new Nail(320,10,1,1);
  nail5 = new Nail(360,10,1,1);
  nail6 = new Nail(400,10,1,1);

  var options1 = {
    bodyA: ball1.body,
    bodyB: nail1.body,
    stiffness: 0.04,
    lenght: 10
  }
  var chain1 = Constraint.create(options1);
  World.add(world, chain1);

  var options2 = {
    bodyA: ball2.body,
    bodyB: nail2.body,
    stiffness: 0.04,
    lenght: 10
  }
  var chain2 = Constraint.create(options2);
  World.add(world, chain2);

  var options3 = {
    bodyA: ball3.body,
    bodyB: nail3.body,
    stiffness: 0.04,
    lenght: 10
  }
  var chain3 = Constraint.create(options3);
  World.add(world, chain3);

  var options4 = {
    bodyA: ball4.body,
    bodyB: nail4.body,
    stiffness: 0.04,
    lenght: 10
  }
  var chain4 = Constraint.create(options4);
  World.add(world, chain4);

  var options5 = {
    bodyA: ball5.body,
    bodyB: nail5.body,
    stiffness: 0.04,
    lenght: 10
  }
  var chain5 = Constraint.create(options5);
  World.add(world, chain5);

  var options6 = {
    bodyA: ball6.body,
    bodyB: nail6.body,
    stiffness: 0.04,
    lenght: 10
  }
  var chain6 = Constraint.create(options6);
  World.add(world, chain6);

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);

  bar.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();

  ground.display();

  nail1.display();
  nail2.display();
  nail3.display();
  nail4.display();
  nail5.display();
  nail6.display();

  strokeWeight(3);
  line(ball1.body.position.x, ball1.body.position.y, nail1.body.position.x, nail1.body.position.y);
  fill("white");

  strokeWeight(3);
  line(ball2.body.position.x, ball2.body.position.y, nail2.body.position.x, nail2.body.position.y);
  fill("white");

  strokeWeight(3);
  line(ball3.body.position.x, ball3.body.position.y, nail3.body.position.x, nail3.body.position.y);
  fill("white");

  strokeWeight(3);
  line(ball4.body.position.x, ball4.body.position.y, nail4.body.position.x, nail4.body.position.y);
  fill("white");

  strokeWeight(3);
  line(ball5.body.position.x, ball5.body.position.y, nail5.body.position.x, nail5.body.position.y);
  fill("white");

  strokeWeight(3);
  line(ball6.body.position.x, ball6.body.position.y, nail6.body.position.x, nail6.body.position.y);
  fill("white");

  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:0});
  }
}