import { signUp } from "../modules/signUp.mjs";
import { snackbar } from "../widgets/snackBar.mjs";
import { codeAleatoireWithPassword } from "../helpers/codeAleatoireWithPassword.mjs";
import { addUserData, addUserDataCode, openBaseDonne } from "../helpers/indexDB.js";
document.addEventListener("DOMContentLoaded", () => {
     let Id = 0;
     window.addEventListener('pageshow', function() {
          document.querySelector("#email").value = "";
          document.querySelector("#password").value = "";
          document.querySelector("#userName").value = "";
          document.querySelector("#userPseudo").value = "";
        });
    
   localStorage.removeItem("userInscription")
     document.querySelector("#form").addEventListener("click", (e) => {
       e.preventDefault();
   
       const userData = {
         email: document.querySelector("#email").value,
         password: document.querySelector("#password").value,
         userName: document.querySelector("#userName").value,
         pseudoName: document.querySelector("#userPseudo").value,
       };
   
       Id++;
       
   
       signUp(userData).then((result) => {
         if (result.message === undefined) {
           result.message = "inscription reussi";
           snackbar(document.querySelector("#body"), "../../assets/icons/info.svg", result.message, 3000);
         } else {
           snackbar(document.querySelector("#body"), "../../assets/icons/info.svg", result.message, 3000);
         }
         if (result.data) {
           result.data.id = Id;
           result.data.authentification = false;
           console.log(result.data);
   
           return openBaseDonne("connexion", "objectCode").then((response) => {
             return addUserData(response, "connexion", result.data, result.data.email).then((message) => {
               if (message.message1) {
                 return codeAleatoireWithPassword(6).then((resolve) => {
                   console.log(resolve);
                   let objectResult = {
                     code: resolve,
                     id: Id,
                   };
   
                    addUserDataCode(response, "objectCode", objectResult).then((messages) => {
                     console.log(messages);

                     localStorage.setItem("userInscription",JSON.stringify(result.data))
   
                     alert(message.message1);
                     
                     window.location.href = "confirmationCodeEmail.html";
                   });
                   
                 });
               } else {
                 alert(message.message2);
               }
             });
           });
         }
       });
     });
   });
   
