/****function qui recupere les emogis au click */

import { displayEmogis } from "./displayEmogis.js";

export function emogis(emojiArray){
    
        displayEmogis(emojiArray)
        textarea.style.display = "block"

        let emojis = document.querySelectorAll(".emojis-capture")
        let inputEmogis;

        emojis.forEach((emoji)=>{
            
            emoji.addEventListener("click",(e)=>{ 
                let input = document.querySelector("#post-input-input")
                inputEmogis = e.target.innerText
                let inputValue = input.value 
                let newInput =  inputValue +  inputEmogis
                return input.value = newInput,textarea.style.display  ="none"
            })
        })

    
}