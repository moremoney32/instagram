import { displayElement } from "../widgets/displayElement.mjs";
import { displayPost } from "./displayPost.mjs";
import { displayPostDonnees } from "./displayPostDonnees.mjs";

//****function qui affiche les posts sur la page */
export function loadingPost(entries,data){
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // L'élément est visible, affichez-le sur le DOM
      const elementToDisplay = data.shift();
      if (elementToDisplay) {
        displayElement(elementToDisplay);
      }
    }
  });
}