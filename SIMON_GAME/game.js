let userseq=[];
let gameseq=[];
let started=false;
let level=0;

let btns=["yellow","red","purple","green"]


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false){
    console.log("game start");
    started=true;
    levelUp();
}


});


///button flash

 function btnFlash(btn){
btn.classList.add("flash")
setTimeout(function(){
    btn.classList.remove("flash");
},250);

}


////userflash
function userFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    
    }


///level upp
function levelUp(){
    userseq=[];
level++;
h2.innerText=`Level ${level}`;

//random btn choose
let random=Math.floor(Math.random()*3);

let randcolor=btns[random];

let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);

console.log(gameseq);

btnFlash(randbtn);



}

/// function check

function checkAns(idx){

//     console.log("cuerrent LevelA=:",level);
// let idx=level-1;

if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
    }


}else{

h2.innerHTML=`Game Over!  Your score was<b>${level}</b> <br>Press any key to start the game`;
document.querySelector("body").style.backgroundColor="red";


setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
},150);
ReSet();

}

}

//reset function()

function ReSet(){
level=0;
gameseq=[];
started=false
userseq=[];

}





function btnpress(){

let btn=this;

userFlash(btn);
let usercolor=btn.getAttribute("id");
console.log(usercolor);
userseq.push(usercolor);

checkAns(userseq.length-1);


}


let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
btn.addEventListener("click",btnpress)
}
