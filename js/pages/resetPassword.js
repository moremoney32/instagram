import { changesConnexionInput } from "../modules/changesConnexionInput.mjs"
import { codeAleatoireWithPassword } from "../modules/codeAleatoireWithPassword.mjs"
//import { fetchData } from "../modules/fetchData.mjs"
import { addUserDataCode, openBaseDonne, verifyEmail } from "../modules/indexDB.js"
import { sendEmail } from "../modules/sendEmail.js"
//import { sendEmail } from "../modules/sendEmail.js"


document.addEventListener("DOMContentLoaded",()=>{
    changesConnexionInput()
    let ID = ""
  
    const url = "https://api.emailjs.com/api/v1.0/email/send";
    document.querySelector('#form').addEventListener("click",(e)=>{
        let email = document.querySelector("#email").value
        console.log(email)

        e.preventDefault()
        ID++;
        openBaseDonne("objectCode").then((response)=>{
              verifyEmail(response,"connexion",email).then((message)=>{
                  alert(message),document.querySelector("#email").value = ""
                })
                codeAleatoireWithPassword(6).then((result)=>{
                    let objectResult = {
                        code:result,
                        id:ID
                    }
                    let data = {
                        
                          email:email,
                          subject: 'Hello',
                          message:result,
                       
                      }
                     addUserDataCode(response,"objectCode",objectResult).then((message)=>{
                        return console.log(message)
                    }) 
                      //fetchData(url,data).then((result)=>{
                       // return result, console.log(result)
                      //})
                      sendEmail(data)
                             
                     
            }) 
            
            
        
         

       })

    })
})