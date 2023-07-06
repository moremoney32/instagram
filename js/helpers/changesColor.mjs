/****function qui change les proprietes des elements ayant la memee classe au clic */
export function changesColor(){
    return new Promise((resolve) => {
        let allVideoImage = document.querySelectorAll(".sous-all-video-pictures")
    allVideoImage.forEach((element)=>{
        element.addEventListener('click',()=>{
            allVideoImage.forEach((elements)=>{
                elements.style.display = "none"
            })
            resolve(this.style.display = "block")
        })
        
    })
        
    })
    
}