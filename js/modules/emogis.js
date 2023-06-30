/****function qui recupere les emogis au click */

import { displayEmogis } from "./displayEmogis.js";

export function emogis(emojiArray){
    
        
        displayEmogis(emojiArray)
        
        let emojis = document.querySelectorAll(".emojis-capture")
        console.log(emojis)
        let inputEmogis;

        emojis.forEach((emoji)=>{
            
            emoji.addEventListener("click",(e)=>{
                console.log(e.target.innerText)
                inputEmogis = e.target.innerText
                return document.querySelector("#post-input-input").innerHTML = inputEmogis
            })
        })
    
      
}