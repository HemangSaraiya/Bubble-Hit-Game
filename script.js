const res=document.getElementById("again");
const start=document.getElementById("start");

res.onclick=function(){
    window.location.reload();
}
start.onclick=function(){
function makebubble(){
    let count="";
for(let i=0;i<=159;i++){
   count+= `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}
document.querySelector(".down").innerHTML=count;
}
let time=60;
function timer(){
    let tem =setInterval(function(){
        if(time>0){
        time--;
        document.querySelector("#timer").innerHTML=time;}
        else{
            clearInterval(tem);
            document.querySelector(".down").innerHTML="Game Over";
        }
    },1000);
}
document.querySelector(".down").addEventListener("click",function(detail){
    let num=Number(detail.target.textContent);
        if(rn===num){
            makebubble();
            increasescore();
            Hit();
        }
       
})
let score=0;
function increasescore(){
    score+=10;
   document.querySelector("#score").textContent=score;
   
}
let rn=0;
function Hit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#Hit").innerHTML=rn;
}
makebubble();
Hit();
timer();

}


