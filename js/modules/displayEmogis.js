/****function qui affiche les emogis */

export function displayEmogis(arrayEmogis){
    
    let emogisHtml;

    arrayEmogis.forEach((emogis)=>{
    
        emogisHtml += `

            <span class ="emojis-capture">${emogis}</span>
            ` 
        
    })
   return  document.querySelector("#textarea").innerHTML = emogisHtml
   

}