const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let time, clockFace, hoursHand, minutesHand, secondsHand;
let seconds, minutes, hours;

clockFace = new Image();
clockFace.src = "img/clockFace.png";

secondsHand = new Image();
secondsHand.src = "img/secondHand.png";

minutesHand = new Image();
minutesHand.src = "img/minutesHand";

hoursHand = new Image();
hoursHand.src = "img/hoursHand";

time = new Date();

setInterval(animate,10)

function animate(){
  time = new Date();
  seconds = time.getSeconds();
  minutes = time.getMinutes();
  hours = time.getHours();
  console.log(hours)


  context.clearRect(0,0,width,height);
  context.drawImage(clockFace,0,0);

context.save();
context.translate(clockFace.width/2,clockFace.height/2)
context.rotate(seconds*2*Math.PI/60);
context.drawImage(secondsHand,-secondsHand.width/2,-secondsHand.height);
context.restore();

context.save();
context.translate(clockFace.width/2,clockFace.height/2)
context.rotate(minutes*2*Math.PI/60);
context.drawImage(minutesHand,-minutesHand.width/2,-minutesHand.height);
context.restore();

context.save();
context.translate(clockFace.width/2,clockFace.height/2)
context.rotate(hours*2*Math.PI/12);
context.drawImage(hoursHand,-hoursHand.width/2,-hoursHand.height);
context.restore();
}
