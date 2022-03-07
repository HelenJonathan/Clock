setInterval(setDate,1000);

const secHand=document.querySelector('.data-second-hand');
const minhand=document.querySelector('.data-minute-hand');
const hrhand=document.querySelector('.data-hour-hand');

function setDate(){
const d = new Date();
const hr=d.getHours();
const m=d.getMinutes();
const sethrdeg= 30*hr + m/2;
hrhand.style.transform=`rotate(${sethrdeg}deg)`;
const setmdeg=6*m;
minhand.style.transform=`rotate(${setmdeg}deg)`;
const s=d.getSeconds();
const setsdeg=6*s;
secHand.style.transform=`rotate(${setsdeg}deg)`;
}
