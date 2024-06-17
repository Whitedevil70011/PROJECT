let str="";
let buttons=document.querySelectorAll(".button");

let clr=document.querySelector(".clear");
clr.addEventListener('click',()=>{
    str="";
    document.querySelector('input').value=str;
})
  
 Array.from( buttons).forEach((button)=>{

button.addEventListener('click',(e)=>{

// console.log(e.target);
if(e.target.innerHTML=='='){
    str =eval(str);
    document.querySelector('input').value=str;
}
else {str=str+e.target.innerHTML;
document.querySelector('input').value=str;}

})



})





