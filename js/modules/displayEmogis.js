/****function qui affiche les emogis */

export function displayEmogis(arrayEmogis){

    let emogisHtml;

    arrayEmogis.forEach((emogis)=>{
        emogisHtml += `

        <span class ="emojis-capture">${emogis}</span>
        ` 
    })
    document.querySelector("#textarea").innerHTML = emogisHtml

}