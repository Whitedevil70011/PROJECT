let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");


let newbtn=document.querySelector("#new_btn");

let msg=document.querySelector(".winer");

let p=document.querySelector("#pp");




let turn=true;//player 0
const arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];


//reset game
const start=()=>{
turn=true;
boxenable();
msg.classList.add("hide");
};








boxes.forEach((box)=>{

box.addEventListener("click",()=>{

// console.log("box was click");

if(turn)
{
    box.innerText="O";
    turn =false;
    box.classList.add("O");

}else{
    box.innerText="X";
    box.classList.add("X");
    turn=true;

}

box.disabled=true;


check();

});


});





const check= ()=>{

    for(let w of arr){
    // console.log(w);
    let p1value=boxes[w[0]].innerText;
    let p2value=boxes[w[1]].innerText;
    let p3value=boxes[w[2]].innerText;
    
    if(p1value!="" && p2value!=""&& p3value!=""){
        if(p1value==p2value && p2value==p3value){
            console.log("winner");
            showWiner(p1value);

        }
       }
    }
};










///winer showing 

const  showWiner=(winner)=>{

p.innerText= `Congratulaton ! winner is ${winner}`;
msg.classList.remove("hide");
boxdisable();

};



/// box disabled

const boxdisable=()=>{

    for (let  box of boxes) box.disabled=true;
}


////box enable
const boxenable=()=>{

    for (let  box of boxes) {
box.disabled=false;
box.innerText="";


    }
}


/// reset btuun

newbtn.addEventListener("click",start);

reset.addEventListener("click",start);