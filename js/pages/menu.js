//import { postDisplay } from "../helpers/postDisplay"

import { closePost } from "../helpers/closePost.mjs";
import { changesMasque } from "../modules/changesMasque.mjs";
import { displayPost } from "../modules/displayPost.mjs";
import { emogis } from "../modules/emogis.js"
import { recuperationInfoPost } from "../modules/recuperationInfoPost.mjs";
import { updateFileVideo } from "../modules/updateFileVideo.mjs";
import { updateFilesImg } from "../modules/updateFilesImg.mjs";

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
      let postDonnes = document.querySelector(".posts-donnees")
      let masque = document.querySelector(".masque")

      changesMasque()
      closePost()
      updateFilesImg()
      updateFileVideo()
     
    document.querySelector(".emogis-click").addEventListener("click",()=>{
        
      return  emogis(emojiArray)
    })
    document.querySelector(".publier").addEventListener("click",()=>{
     
      recuperationInfoPost().then((result)=>{
       
        if(result.length === 0){
            return alert("vous n avez rien choisi a publier")
        }
        return postDonnes.style.display = "none",
        masque.style.display ="none",
        
        displayPost(result),
         localStorage.removeItem('postNew');
        
      })
    })
  })