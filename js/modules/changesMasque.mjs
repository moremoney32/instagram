/***change le masque sur le menu */
export function changesMasque(){

    let postDonnes = document.querySelector(".posts-donnees")
    let masque =   document.querySelector(".masque")
    document.querySelector(".sous-section2-1-input input").addEventListener("click",()=>{
   
      postDonnes.style.display = "block";
      postDonnes.style.zIndex = 999;
            masque.style.display = "block";
            masque.style.zIndex = 9;
      })
}