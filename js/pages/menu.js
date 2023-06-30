//import { postDisplay } from "../helpers/postDisplay"

import { emogis } from "../modules/emogis.js"

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
    document.querySelector(".emogis-click").addEventListener("click",()=>{
        emogis(emojiArray)
    })
    
 
})