export function changesConnexionInput() {

    let input = document.querySelector(".input-reset")
    let button = document.querySelector(".button-reset")

    input.addEventListener("input",(e)=>{
        let enterMail = e.target.value.length
        if(enterMail !== 0){    
            return button.classList.remove("button-reset")
        } 
        return  button.classList.add("button-reset")
    })
    
} 