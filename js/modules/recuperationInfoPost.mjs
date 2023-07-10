import { closePost } from "../helpers/closePost.mjs";

/***function qui recupere les donnees du post et le stocke dans un tableau */
let arrayInfo = [];
export function recuperationInfoPost(){
    return new Promise((resolve) => {
    let infoPost = JSON.parse(localStorage.getItem("postNew"));
    let input = document.querySelector("#post-input-input");
    infoPost.description = input.value;
    arrayInfo.push(infoPost);
    console.log(arrayInfo)
    
  
   return resolve(arrayInfo);
        
        
    })
}