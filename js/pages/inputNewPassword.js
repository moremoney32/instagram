
import { changesConnexionInput } from "../helpers/changesConnexionInput.mjs"
import { openBaseDonne, updateInfoUserPassword } from "../helpers/indexDB.js"

document.addEventListener("DOMContentLoaded",()=>{
    changesConnexionInput()

    document.querySelector('#form').addEventListener("click",(e)=>{
        let email = document.querySelector("#email").value
        console.log(email)

        e.preventDefault()

            openBaseDonne("connexion","objectCode").then((response)=>{

          return    updateInfoUserPassword(response,"connexion",email),
          window.location.href = "menu.html";
            
        })
    })
})