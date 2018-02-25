var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var col = [ "#ff7f50" , "#ff4162", "	#ecf284", "#10aeb2"];

var shapes = [];
SIZE = 20;

function Shape(x,y,numberOfSides, length, color){
  this.numberOfSides = numberOfSides,
  this.size = length,
  this.x = x,
  this.y = y,
  this.step  = 2 * Math.PI / this.numberOfSides,
  this.shift = (Math.PI / 180.0) * -18,
  this.circ = (Math.random()-0.5)*1,
  this.radians = 0,
  this.velocity = 0.05,
  this.direction = Math.random() >= 0.5,
  this.color = color;

this.draw = function(){
    c.beginPath();

    for (var i = 0; i <= this.numberOfSides; i++) {
    	this.curStep = i * this.step + this.shift;
      c.lineTo (this.x + this.size * Math.cos(this.curStep), this.y + this.size * Math.sin(this.curStep));
    }

    c.strokeStyle = this.color;
    c.lineWidth = 1;
    c.stroke();
    c.fillStyle = this.color;

    c.stroke();
    c.fill();
  }

  this.update = function() {

    if(this.direction == true){
      this.radians -= this.velocity;
    }
    else{
      this.radians += this.velocity;
    }
    this.x = this.x + Math.cos(this.radians)*this.circ;
    this.y = this.y + Math.sin(this.radians)*this.circ;

    this.draw();
  }
}


for(var i = 0; i<SIZE; i++) {
  var x = Math.floor(Math.random()*innerWidth),
      y = Math.floor(Math.random()*innerHeight),
      sides = Math.floor(Math.random()*4) + 3,
      length = Math.floor(Math.random()*25) + 10;
      colors = col[Math.floor((Math.random()*5))];

  shapes.push(new Shape(x, y, sides, length, colors));

}



function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var r = 0; r<SIZE; r++){
    shapes[r].update();
  }
}

animate();
