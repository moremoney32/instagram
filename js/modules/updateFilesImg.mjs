/***function qui update les images***/

import { closePost } from "../helpers/closePost.mjs"


export function updateFilesImg(){

    let inputPost = document.querySelector("#update-picture-input")
    let id = 0
   
    let picture = document.querySelector("#update-picture")
    let allVideoImage = document.querySelectorAll(".imgvideo")
    let publier  = document.querySelector(".publier")
    let objectinfoPost = {
        image:"",
        description:"",
        idPost:""
    }

    let image = null
    picture.addEventListener("click",()=>{
        inputPost.click()
    })
    inputPost.addEventListener("change",(e)=>{
        let updateFile = e.target.files[0]
        if(updateFile.type.startsWith("image/")){
            allVideoImage.forEach((imageVideo)=>{
                imageVideo.style.display = "none"
            })
            publier.style.background ="#0001bc"
            publier.style.color = "white"


            let updateFileRead = new FileReader()
        updateFileRead.onload = (e) =>{
            if(image !== null){
                image.remove()
            }
            image = document.createElement('img');
            image.src = e.target.result;
            image.style.width = '560px';
            image.style.height = '200px';
            image.style.borderRadius = '10px';
            image.style.objectFit = 'cover';
            image.style.position = "absolute"
            image.style.top = "130px"
            image.style.textAlign = "center"
            id++;
            document.querySelector(".post-input").appendChild(image);
            objectinfoPost.image = e.target.result;
            objectinfoPost.idPost = id;
            console.log(objectinfoPost)
            localStorage.setItem("postNew", JSON.stringify(objectinfoPost));
            closePost(image).then((result)=>{
                return result
            })
          }
          
      
        return  updateFileRead.readAsDataURL(updateFile),inputPost.value = "";

        }

        return  alert('Veuillez sélectionner uniquement une image.'),inputPost.value = "";
        
        
         
    })
    
    
    

}