/****function qui affiche les donnees d un  post**/

export function postDisplay(){
    let emogi = document.querySelector(".input-post-emoticone")
    let postEmogi = new EmojiPicker();
    postEmogi.listenOn(emogi);
}
