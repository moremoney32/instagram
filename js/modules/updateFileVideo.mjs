/**function qui update les videos */

import { generateUniqueId } from "../helpers/generatorId.mjs"

export function updateFileVideo(){
    let inputVideo = document.querySelector("#update-picture-video")
    let videoUpdate = document.querySelector("#update-video")
    let allVideoImage = document.querySelectorAll(".img-pictures")
    let publier  = document.querySelector(".publier")
    let objectinfoPost = {
        description:"" 
    }
    console.log(objectinfoPost)
    localStorage.setItem("postNew", JSON.stringify(objectinfoPost));
    let infoPost = JSON.parse(localStorage.getItem("postNew"));
    let video  = null
    videoUpdate.addEventListener("click",()=>{
        inputVideo.click()
    })
    inputVideo.addEventListener("change",(e)=>{
        let updateFileVideo = e.target.files[0]
        if(updateFileVideo.type.startsWith("video/")){
            allVideoImage.forEach((imageVideo)=>{
                imageVideo.style.display = "none"
            })
            publier.style.background ="#0001bc"
            publier.style.color = "white"
            let videoUrl = URL.createObjectURL(updateFileVideo);
            if (video !== null) {
                video.remove(); 
              }
              video = document.createElement('video');
              video.src = videoUrl;
              video.controls = true;
              video.classList.add("video")
              infoPost.video =  videoUrl;
              infoPost.id = generateUniqueId();
              console.log(infoPost)
              localStorage.setItem("postNew", JSON.stringify(infoPost));
            return  document.querySelector(".post-input").appendChild(video),inputVideo.value = "";
             
        }
        
         return   alert('Veuillez sélectionner uniquement une vidéo.'),inputVideo.value = "";
             
          
    })


}