
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img,angle,img2
img = new Image();
img.src = "img/cog.png";

img2 = new Image();
img2.src = "img/cog2.png";

angle = 0.1;

img.addEventListener('load',()=>{
  setInterval(animate,10)
})

function animate (){
    context.clearRect(0,0,height,width);
    context.save();
    context.translate(300,300);
    context.rotate(angle);
    context.drawImage(img,-150,-150,300,300);
    context.restore();

    context.save();
    context.translate(340,565);
    context.rotate(-angle);
    context.drawImage(img2,-150,-150,300,300);
    context.restore();
    angle += 0.01;
}
