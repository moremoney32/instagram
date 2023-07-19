
import { changesConnexionInput } from "../helpers/changesConnexionInput.mjs";
import { codeAleatoireWithPassword } from "../helpers/codeAleatoireWithPassword.mjs";
import { addUserDataCode, openBaseDonne, verifyEmail } from "../helpers/indexDB.js";


document.addEventListener("DOMContentLoaded", () => {
    
    changesConnexionInput()
    let ID = "";
  
    window.onunload = function() {
      document.querySelector("#email").value = "";
    };
  
    document.querySelector('#form').addEventListener("click", (e) => {
      let email = document.querySelector("#email").value;
      console.log(email);
  
      e.preventDefault();
      ID++;
  
      openBaseDonne("connexion", "objectCode","objectFiles").then((response) => {
            verifyEmail(response, "connexion", email).then((message) => {
          console.log(message);
          if (message.message1) {
           return codeAleatoireWithPassword(6).then((result) => {
              let objectResult = {
                code: result,
                id: ID
              };
              let objectEmail = {
                email: email,
                id: ID
              };
  
            return  addUserDataCode(response, "objectCode", objectResult).then((messages) => {
                console.log(messages);
                localStorage.setItem("userInscription", JSON.stringify(objectEmail));
               return alert(message.message1),
  
                window.location.href = "confirmationCodePassword.html";
              });
            });
          } else {
            alert(message.message2);
          }
        });
      });
    });
  });