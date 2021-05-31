const buble = [];
var t;
var dist;
var binal = [-1,1];

function setup() {
  createCanvas(windowWidth,700, WEBGL);
  t = 0;
  camera(5,800,600,1,1,1);
  dist = 800;
}

function draw() {
  rotateZ(t/200);
  background(255);
  noFill();
  stroke(200);
  strokeWeight(2);
  plane(dist*0.7, dist *0.7, 10, 10);
  box(dist *10, dist *1.2,100);
  if(t%10 == 1){
    buble.push(new Ellipse(color(random(255,100),random(200,100),random(255,100),100),random(10,5)*random(binal),random(70,50), random(-dist/2,dist/2)));
  }
  for(var i=0; i < buble.length;i++){
    buble[i].display();
    if(-1 * dist < buble[i].posx && buble[i].posx < dist){
      buble[i].showLine();
    }
    if(buble[i].posx > dist && buble[i].vel>0){
      buble.splice(i,1);
    }
    else if(buble[i].posx < -1 * dist && buble[i].vel<0){
      buble.splice(i,1);
    }
  }
  t += 1;
  textAlign(CENTER);
  textSize(20);
  fill(100);
  rotateZ(-t/100);
  //text("What is your COLOR ??",width/2, height*3/4 +20);
}


class Ellipse {
  constructor(col,vel,size, posy){
    this.col = col;
    this.vel = vel;
    this.size = size;
    this.posy = posy;
    if(this.vel < 0){
      this.posx = width;
    }
    else{
      this.posx = 0;
    }
  }
  
  display(){
    noStroke();
    fill(this.col);
    translate(this.posx,this.posy,0);
    sphere(this.size);
    translate(-this.posx,-this.posy,0);
    this.posx += this.vel;
  } 
  
  showLine(){
    stroke(this.col , sq(this.posx - width/2));
    strokeWeight(0.7);
    line(this.posx, this.posy - this.size/2,0,0,-height*3/4,0);
  }
  

}