
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let myLine = new LinearFunction(-0.4,300);


let A = new Point(100,100,20,"orange",true);
let B = new Point(500,200,20,"magenta",true);

function animate (){
	context.clearRect(0,0,width,height)
  A.draw(context);
	B.draw(context);
	myLine.slope = (B.y - A.y)/(B.x - A.x);

	myLine.intercept = B.y - myLine.slope*B.x;
	myLine.draw(context,"red");
}
setInterval(animate,10);
