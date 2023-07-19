import { changesConnexionInput } from "../helpers/changesConnexionInput.mjs"
import { openBaseDonne, verifyCode } from "../helpers/indexDB.js"




document.addEventListener("DOMContentLoaded",()=>{
    changesConnexionInput()

    document.querySelector('#form').addEventListener("click",(e)=>{
        let email = document.querySelector("#email").value
        console.log(email)

        e.preventDefault()


        openBaseDonne("connexion","objectCode","objectFiles").then((response)=>{

            verifyCode(response,"objectCode",email).then((message)=>{
                if(message.message1){
                    return alert(message.message1),window.location.href = "inputNewPassword.html";
                }
                return alert(message.message2)
            })
            
        })
    })
})