/***function qui ferme la popup du post */

export function closePost(){
   // return new Promise((resolve) => {
        

    //let image = document.querySelectorAll("#update-picture")
     

    document.querySelector(".close").addEventListener("click",()=>{
        
        let masque = document.querySelector(".masque")
    let postDonnees = document.querySelector(".posts-donnees")
    let allVideoImage = document.querySelectorAll(".sous-all-video-pictures")
        masque.style.display = "none"
        postDonnees.style.display = "none"
        //image.remove()
        document.querySelector("#post-input-input").value = ""
        allVideoImage.forEach((imageVideo)=>{
        return   imageVideo.style.display = "block"
            
            
        })
        
    })
   // })

    

}