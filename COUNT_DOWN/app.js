const  endate=" 12 June  2024  10:00 PM "

document.querySelector("#endd").innerText=endate;

let inputs=document.querySelectorAll("input");
const clock=()=>{


const end=new Date(endate);
const now=new Date();

const dif=(end-now)/1000;
if(dif<0) {
    return ;
}
//convert days
inputs[0].value=(Math.floor(dif/3600/24));
//conveets hours
inputs[1].value=(Math.floor((dif/3600)%24))
/// convert int dayss
inputs[2].value=Math.floor((dif/60) % 60);
inputs[3].value=Math.floor(dif%60);

}
setInterval(()=>{
    clock();
},1000);