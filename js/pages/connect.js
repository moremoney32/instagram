
import { connect } from "../modules/connect.mjs";
import { changeSlider } from "../modules/changeSlider.mjs";
import { snackbar } from "../widgets/snackBar.mjs";
import { openBaseDonne, verifyEmailPassword } from "../helpers/indexDB.js";

document.addEventListener("DOMContentLoaded", () => {
     changeSlider();

     
     document.querySelector("#form").addEventListener("click", (e) => {
          e.preventDefault();

          const userData = {
               email: document.querySelector("#email").value,

               password: document.querySelector("#password").value,
          };
          connect(userData).then((result) => {
             
               snackbar(document.querySelector("#bodyConnection"), "../../assets/icons/info.svg", result.message, 3000);
              
               if(result.data){
                    return openBaseDonne("connexion","objectCode","objectFiles").then((response)=>{
                         return  verifyEmailPassword(response,"connexion",result.data.email,result.data.password).then((message)=>{
                            return   alert(message), window.location.href = "menu.html";
                         })
                      
          
                    })
               }
          })
         

         

         
     });
});
