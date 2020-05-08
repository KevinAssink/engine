// /*
// 23-2-2020
// klasse om punten op de 2d context van een canvas te tekenen
//
// eigenschappen
// * pos (positie van het middelpunt m.b.v. een Vector2d)
// * radius (grootte van de cirkel in pixels)
// * color (kleur van het punt, als String)
// */

class Point {

  constructor(x,y,radius,color,draggable){
	  this.x = x;
	  this.y = y;
	  this.radius = radius;
	  this.color = color;
	  this.draggable = false || draggable;
	  if(this.draggable) this.Drag();

  }
  draw(){
	  context.beginPath();
    context.strokeStyle = "";
	  context.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
	  context.closePath();
	  context.fill();
	  context.stroke();
  }
  get vPos (){
    return new Vector2d(this.x,this.y);
  }

  set vPos(vector){
    this.x = vector.dx;
    this.y = vector.dy;
  }

  Drag(){

	let distance = 1000;
	let dragging = false

	addEventListener("mousedown", (e) => {
		//functie om te kijken of de muis op de circle staat
		if(pointInCircle(e.clientX, e.clientY, this.x, this.y, this.radius)){
		this.x = e.clientX
this.y = e.clientY
this.dragging = true;
		}
	});

	addEventListener("mousemove", (e) => {
		if(this.dragging == true){
this.x = e.clientX
this.y = e.clientY
		}
	})

	addEventListener("mouseup", (e)=>{
this.dragging = false
	});
}


}

function pointInCircle(x, y, cx, cy, radius) {
	var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
	return distancesquared <= radius * radius;
  }
