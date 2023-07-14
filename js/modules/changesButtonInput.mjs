/**
 * function qui change la couleur du button lors de  l input
 */

export function changesButtonInput(){
    let publier  = document.querySelector(".publier")
    let input = document.querySelector("#post-input-input");
    input.addEventListener("input",(e)=>{
        let enterInput = e.target.value.length
        console.log(enterInput)
        if(enterInput !== 0){    
            return publier.classList.remove("publier"),
             publier.classList.add("publier-change")
             
        } 
        return  publier.classList.remove("publier-change"),
        publier.classList.add("publier")
    })
}