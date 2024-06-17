
 
 
 
 
 let city=document.querySelector("#city");
 let temp=document.querySelector("#temp");

 let button=document.querySelector(".button");
let input=document.querySelector(".input");

let body_image=document.querySelector("#body_image");

 async function checkWeather(city_name){

    let Upi_key='f27b269d54e4fa1e72993364a80fa8bd'
    let repsponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${Upi_key}&units=metric`);
    let data= await repsponse.json();

    console.log(data);
    city.innerHTML=data.name;
    temp.innerHTML=data.main.temp+"°C";

    // if(data.w)





   
}




button.addEventListener('click',()=>{
    checkWeather(input.value);


})


