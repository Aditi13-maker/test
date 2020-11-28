var particles=[];
var plinkos=[]
var divisions=[]

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
 
//divisions=new Divisions(k,k,400,10)
//plinkos=new Plinkos(j,j,10)

}

function draw() {
  background("black");  
  for(var k=0;k<=innerWidth;k=k+80){
  divisions.push(new Divisioins(k,height-divisionHeight/2,10,divisionHeight));
    
  }
for(var j=40;j<=width;j=j+5){
  plinkos.push(new Plinko(j,75));
}

for(var j=15;j<=width;j=j+50){
  plinkos.push(new Plinko(j,175));
}

  drawSprites();
}