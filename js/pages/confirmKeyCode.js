import { changesConnexionInput } from "../helpers/changesConnexionInput.mjs"
import { openBaseDonne, updateInfoUser, verifyCode } from "../helpers/indexDB.js"


document.addEventListener("DOMContentLoaded",()=>{
    changesConnexionInput()

    document.querySelector('#form').addEventListener("click",(e)=>{
        let email = document.querySelector("#email").value
       
        e.preventDefault()


        openBaseDonne("connexion","objectCode").then((response)=>{

            verifyCode(response,"objectCode",email).then((message)=>{
                if(message.message1){
                    return alert(message.message1)
                }
                return alert(message.message2)
            })
            return updateInfoUser(response,"connexion"), window.location.href = "menu.html";
        })
    })
})