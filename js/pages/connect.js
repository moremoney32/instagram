//import { connect } from "../modules/connect.mjs"
import { connect } from "../modules/connect.mjs";
import { changeSlider } from "../modules/changeSlider.mjs";
import { openBaseDonne,verifyEmailPassword } from "../modules/indexDB.js"
import { snackbar } from "../widgets/snackBar.mjs";

document.addEventListener("DOMContentLoaded", () => {
     changeSlider();

     
     document.querySelector("#form").addEventListener("click", (e) => {
          e.preventDefault();

          const userData = {
               email: document.querySelector("#email").value,

               password: document.querySelector("#password").value,
          };
          console.log(userData);
          connect(userData).then((result) => {
              // console.log(result.message);
               //console.log(result.data.email)

               snackbar(document.querySelector("#bodyConnection"), "../../assets/icons/info.svg", result.message, 3000);
              
               if(result.data){
                    return openBaseDonne("connexion","objectCode").then((response)=>{
                         return  verifyEmailPassword(response,"connexion",result.data.email,result.data.password).then((message)=>{
                            return   alert(message)
                         })
                      
          
                    })
               }
          })
         

         

         
     });
});
