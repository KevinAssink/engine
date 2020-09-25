
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img, img2, angle;

img = new Image();
img.src = "img/cog.png";

img2 = new Image();
img2.src = "img/cog2.png"


angle = 0.1;

img.addEventListener('load',()=>{
  setInterval(animate,10)
})

img2.addEventListener('load',()=>{
  setInterval(animate,10)
})

function animate (){
  context.clearRect(0,0,width,height);
  context.save();
  context.translate(300,300);
  context.rotate(angle)
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle += 0.01;
}

function animate(){
  context.clearRect(0,0,width,height);
  context.save();
  context.translate(600,600);
  context.rotate(angle);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle += 0.005;
}
