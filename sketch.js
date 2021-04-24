const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject = new Ground(width / 2, 670, width, 20);
	dustbinObj = new Dustbin(1200, 650);
	paper = new Paper(100, 200, 10);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600, height: 700, wireframes: false
		}
	}
	);
	Render.run(render);
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(230);

	groundObject.display();
	dustbinObj.display();
	paper.display();

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 130, y: -145 });
	}
}

