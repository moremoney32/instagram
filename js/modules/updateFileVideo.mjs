/**function qui update les videos */

import { closePost } from "../helpers/closePost.mjs"

export function updateFileVideo(){
    let inputVideo = document.querySelector("#update-picture-video")
    let videoUpdate = document.querySelector("#update-video")
    let allVideoImage = document.querySelectorAll(".img-pictures")
    let publier  = document.querySelector(".publier")
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
              closePost(video).then((result)=>{
                return result
            })
            return  document.querySelector(".post-input").appendChild(video),inputVideo.value = "";
             
        }
        
         return   alert('Veuillez sélectionner uniquement une vidéo.'),inputVideo.value = "";
             
          
    })


}