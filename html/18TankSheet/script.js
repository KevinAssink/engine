const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let spriteSheet,sw,sh,gTank,bTank;

spriteSheet = new Image();
spriteSheet.src = "img/tanksheet.png";


gTank = {};
gTank.animationArray = [1,2,3,4,5,6,7,8];
gTank.index = 0;
gTank.draw = function() {
  context.drawImage(spriteSheet,gTank.animationArray[gTank.index] * 84,0,84,84,100,100,84,84);
}

spriteSheet.addEventListener('load',()=>{
sw = spriteSheet.witdh/8;
sh = spriteSheet.height/4;
//console.log(spriteSheet.width, spriteSheet.heigt)
//context.drawImage(spriteSheet,0,0);
setInterval(animate,1000);
});

function animate(){
  context.clearRect(0,0,width,height);
  gTank.draw();
  gTank.index += 1;
  if(gTank.index >= gTank.animationArray.length-1){
    gTank.index = 1;
  }
  console.log(gTank.index)
}
