

import { connect } from "../modules/connect.mjs"
import { changeSlider } from "../modules/changeSlider.mjs"
import { addData, verifyEmail, openBaseDonne } from "../modules/indexDB.js"



document.addEventListener('DOMContentLoaded',()=>{  
   
    changeSlider();
   
    let Id = 0;
    
   document.querySelector("#form").addEventListener("click",(e)=>{

    e.preventDefault();

    const userData = {

        email: document.querySelector("#email").value,

        password: document.querySelector("#password").value,

    };
   
     
    Id++;

        connect(userData).then((result) => {
            console.log(result) 
            let idUser = {id:Id}
            let  userObject = Object.assign({}, idUser, result);
            console.log(userObject)
            let email = JSON.stringify(result.email)
            console.log(email)
           
            
                            
                openBaseDonne("connexion")
                         .then((response) => {
                      verifyEmail(response, "connexion", email)
                            .then((resolve) => {
                                     if (resolve) {
                                             return  console.log("L'email existe déjà dans la base de données");
                                     } else {
                                                addData(response, "connexion", userObject)
                                                    .then((message) => {
                                                return   console.log(message)
                                            })
                    }
                    })
                })
           
      })
    

   })


})