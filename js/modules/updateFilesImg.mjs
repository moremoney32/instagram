/***function qui update les images***/

import { generateUniqueId } from "../helpers/generatorId.mjs";

export function updateFilesImg() {
     return new Promise((resolve) => {
          let picture = document.querySelector("#update-picture");
          let inputPost = document.querySelector("#update-picture-input");
          let allVideoImage = document.querySelectorAll(".imgvideo");
          let publier = document.querySelector(".publier");

          let objectinfoPost = {
               description: "",
          };
          console.log(objectinfoPost);
          localStorage.setItem("postNew", JSON.stringify(objectinfoPost));
          let infoPost = JSON.parse(localStorage.getItem("postNew"));

          let image = null;
          const checkFiles = () => {
               inputPost.click();
          };
          picture.addEventListener("click", checkFiles);
          const changeFiles = (e) => {
               let updateFile = e.target.files[0];
               if (updateFile.type.startsWith("image/")) {
                    allVideoImage.forEach((imageVideo) => {
                         imageVideo.style.display = "none";
                    });
                    publier.style.background = "#0001bc";
                    publier.style.color = "white";

                    let updateFileRead = new FileReader();
                    updateFileRead.onload = (e) => {
                         if (image !== null) {
                              image.remove();
                         }
                         image = document.createElement("img");
                         image.src = e.target.result;
                         image.classList.add("image");
                         document
                              .querySelector(".post-input")
                              .appendChild(image);
                         infoPost.image = e.target.result;
                         infoPost.id = generateUniqueId();
                         localStorage.setItem(
                              "postNew",
                              JSON.stringify(infoPost)
                         );
                         return resolve(image);
                    };
                    return (
                         updateFileRead.readAsDataURL(updateFile),
                         (inputPost.value = "")
                    );
               }

               return (
                    resolve(
                         alert("Veuillez sélectionner uniquement une image.")
                    ),
                    (inputPost.value = "")
               );
          };
          inputPost.addEventListener("change", changeFiles);
     });
}
