//import { postDisplay } from "../helpers/postDisplay"

import { closePost } from "../helpers/closePost.mjs";
import { changesMasque } from "../widgets/changesMasque.mjs";
import { displayPost } from "../modules/displayPost.mjs";
import { emogis } from "../modules/emogis.js"
import { recuperationInfoPost } from "../modules/recuperationInfoPost.mjs";
import { updateFileVideo } from "../modules/updateFileVideo.mjs";
import { updateFilesImg } from "../modules/updateFilesImg.mjs";
import { changesButtonInput } from "../modules/changesButtonInput.mjs";

document.addEventListener("DOMContentLoaded",()=>{
    
    const emojiArray = [
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
        '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
        '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
        '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥',
        '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮',
        '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓',
        "🙆‍♀️","😵‍💫","🤡","👽","👹","🛰️","🪂","🚠","💺","🆑","Ⓜ️","🔻",
      ];
      document.querySelector(".sous-section2-1-input input").addEventListener("click",()=>{
      
      changesMasque()
      closePost()
      changesButtonInput()
      updateFilesImg().then((response)=>{
        console.log(response)
        return response
      })
      updateFileVideo()
     
    document.querySelector(".emogis-click").addEventListener("click",()=>{
        
      return  emogis(emojiArray)
    })
    
    const checkFiles = ()=>{
      let postDonnes = document.querySelector(".posts-donnees")
      let masque = document.querySelector(".masque")
      recuperationInfoPost().then((result)=>{
        if(result === "vous n avez rien choisi"){
        return  alert("vous n avez rien choisi")
        }
        else{
           
        postDonnes.remove()
        masque.style.display = "none"
        displayPost(result)
       console.log(result)
        localStorage.removeItem('postNew')

        }
      })

    }
    let publier = document.querySelector(".publier")
    //publier.removeEventListener("click",checkFiles)
    publier.addEventListener("click",checkFiles)
    
      
  }) 
   
  })