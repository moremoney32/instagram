

/***function qui recupere les donnees du post et le stocke dans un tableau */

export function recuperationInfoPost(){
    return new Promise((resolve) => {
        let arrayInfo = [];
    let infoPost = JSON.parse(localStorage.getItem("postNew"));
    console.log(infoPost)
    let input = document.querySelector("#post-input-input");
    infoPost.description = input.value;
    console.log(infoPost)
   // if(infoPost.description === "" && infoPost.image === undefined || infoPost.video === undefined){
       // return resolve("vous n avez rien choisi")
   // }
   
    if(infoPost.description.length !== 0 || infoPost.image !== undefined || infoPost.video !== undefined) {
        localStorage.setItem("postNew", JSON.stringify(infoPost));
        arrayInfo.push(infoPost);
        console.log(arrayInfo)
        return resolve(arrayInfo);

    }     
        
    })
}