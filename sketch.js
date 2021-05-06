const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var div1;

var engine,world;

var divisions=[];
var plinko=[];
var particle=[];
var divisionHeight=300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

ground=new Ground(width/2,height,width,20);

for(var i=0;i<=width; i=i+80){
 divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
}

for(var j = 40; j<=width; j=j+50){

 plinko.push(new Plinko(j,75));
}

for(var j = 15; j<=width -10; j=j+50){

  plinko.push(new Plinko(j,175));
 }

 for(var j = 40; j<=width; j=j+50){

  plinko.push(new Plinko(j,275));
 }


}

function draw() {
  background("black"); 
  
  Engine.update(engine);

  ground.display();
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
    }

for(var j=0; j<plinko.length;j++){
  plinko[j].display();
}
if(frameCount%60===0){
  particle.push(new Particle(random(width/2-30 ,width/2+30),10,10));
}

for(var f=0; f<particle.length;f++)
particle[f].display();


  }

