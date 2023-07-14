import { displayPostDonnees } from "../modules/displayPostDonnees.mjs"

/***change le masque sur le menu */
export function changesMasque(){
  
      displayPostDonnees()
      let postDonnes = document.querySelector(".posts-donnees")
      let masque =   document.querySelector(".masque")
      postDonnes.style.display = "block";
            masque.style.display = "block";
            masque.style.zIndex = 9;
}