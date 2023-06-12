

//import { connect } from "../modules/connect.mjs"
import { changeSlider } from "../modules/changeSlider.mjs"
//import { addData,openBaseDonne } from "../modules/indexDB.js"



document.addEventListener('DOMContentLoaded',()=>{  
   
    changeSlider();
   
    let Id = 0;
    
   document.querySelector("#form").addEventListener("click",(e)=>{

    e.preventDefault();

    const userData = {

        email: document.querySelector("#email").value,

        password: document.querySelector("#password").value,

    };
    console.log(userData)
   
     
    Id++;


   })


})