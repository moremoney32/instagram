import { signUp } from "../modules/signUp.mjs";
import { addUserData, openBaseDonne } from "../modules/indexDB.js";
import { snackbar } from "../widgets/snackBar.mjs";

document.addEventListener("DOMContentLoaded", () => {
     let Id = 0;

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
               snackbar(document.querySelector("#body"), "../../assets/icons/info.svg", result, 3000);
               result.id = Id;

               if (typeof result !== "string") {
                    return openBaseDonne("connexion").then((response) => {
                         addUserData(response, "connexion", result).then(
                              (message) => {
                                   return alert(message);
                              }
                         );
                    });
               }
          });
     });
});
