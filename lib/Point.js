/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Point {

  constructor(x,y,radius,color,draggable){
		// hier komt de constructor
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draggable = false || draggable
    if (this.draggable);
  }

  draw(context){
		//hier komt de code om een cirkel te tekenen
    context.beginPath();
    context.fillStyle=this.color;
    context.arc(this.x,this.y,this.radius,0,Math.PI*2);
    context.stroke();
    context.fill();
  }


}
