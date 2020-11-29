const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var rope;
var ball;
var ball2;
var ball3;
var rope2;
var rope3;
var ball4;
var rope4;
var rope5;
var ball5;
var block4;


function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;



    ball = new Ball(200,0,80,80)
    rope = new Rope(ball.body,{x:600,y:50});
    ball2 = new Ball(620,250,80,80)
    rope2 = new Rope(ball2.body,{x:670,y:50});
    ball3 = new Ball(700,260,80,80)
    rope3 = new Rope(ball3.body,{x:740,y:50});
    ball4 = new Ball(800,260,80,80)
    rope4 = new Rope(ball4.body,{x:810,y:50});
    ball5 = new Ball(900,260,80,80)
    rope5 = new Rope(ball5.body,{x:880,y:50});



   
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    
    ball.display();
    rope.display();
    ball2.display();
    rope2.display();
    ball3.display();
    rope3.display();
    ball4.display();
    rope4.display();
    ball5.display();
    rope5.display();
}