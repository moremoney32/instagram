import { sign } from "../modules/sign.mjs"
import { addUserData,openBaseDonne } from "../modules/indexDB.js"



document.addEventListener('DOMContentLoaded',()=>{  
   
    //changeSlider();
   
    let Id = 0;
    
   document.querySelector("#form").addEventListener("click",(e)=>{

    e.preventDefault();

    const userData = {

        email: document.querySelector("#email").value,

        password: document.querySelector("#password").value,

        userName: document.querySelector("#userName").value,

        sodoName: document.querySelector("#userSodo").value,

    };
   
     
    Id++;

       
    sign(userData).then((result) => {
        console.log(result)
        
        for(let keyUser in result){
            if(result[keyUser]===false){
                   
             return   openBaseDonne("connexion")
             
                         .then((response) => { 
                            let idUser = {id:Id}
                            let  userObject = Object.assign({}, idUser, result);   
                            addUserData(response, "connexion", userObject)
                            .then((message) => {
                                return   alert(message)                      
            
                    })
                })
            }
    }

        //let idUser = {id:Id}

        //let  userObject = Object.assign({}, idUser, result);
                   
                //openBaseDonne("connexion")
                         //.then((response) => {    
                            //addUserData(response, "connexion", userObject)
                            //.then((message) => {
                                //return   alert(message)                      
            
                    //})
                //})
              
           
      })
    

   })


})