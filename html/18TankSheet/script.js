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
    gTank.sx = gTank.animationArray[gTank.index]%8 *84;
    gTank.sy = Math.floor(gTank.animationArray[gTank.index]/8)*84;
    context.drawImage(spriteSheet,gTank.sx,gTank.sy,84,84,100,100,84,84);
}

bTank = {};
bTank.animationArray = [9,10,11,12,13,14,15,16];
bTank.index = 0;

bTank.draw = function() {
    bTank.sx = bTank.animationArray[bTank.index]%8 *84;
    bTank.sy = Math.floor(bTank.animationArray[bTank.index]/8)*84;
    context.drawImage(spriteSheet,bTank.sx,bTank.sy,84,84,200,100,84,84);
}

spriteSheet.addEventListener('load',()=>{
sw = spriteSheet.witdh/8;
sh = spriteSheet.height/4;
//console.log(spriteSheet.width, spriteSheet.heigt)
//context.drawImage(spriteSheet,0,0);
setInterval(animate,100);
});

function animate(){
  context.clearRect(0,0,width,height);
  gTank.draw();
  gTank.index += 1;
  if(gTank.index >= gTank.animationArray.length){
    gTank.index = 0;
  }
  console.log(gTank.index, bTank.index)

  bTank.draw();
  bTank.index += 1;
  if (bTank.index >= bTank.animationArray.length){
    bTank.index = 0;
  }
  
}
