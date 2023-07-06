/***function qui ferme la popup du post */

export function closePost(image){
    return new Promise((resolve) => {
        

        let masque = document.querySelector(".masque")
    let postDonnees = document.querySelector(".posts-donnees")
    let allVideoImage = document.querySelectorAll(".sous-all-video-pictures")
    //let image = document.querySelectorAll("#update-picture")
     

    document.querySelector(".close").addEventListener("click",()=>{
        masque.style.display = "none"
        postDonnees.style.display = "none"
        image.remove()
        document.querySelector("#post-input-input").value = ""
        allVideoImage.forEach((imageVideo)=>{
           resolve(imageVideo.style.display = "block") 
            
            
        })
        
    })
    })

    

}