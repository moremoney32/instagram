//***function qui genere un nouveau de maniere aleatoire en tenant compte de sa longueur */

export function codeAleatoireWithPassword(number){
    return new Promise((resolve)=>{

        let elements = "ABCDEFGHIJKL0123456789@!-/abcdefghijklmnopqrstuvwxyz01234MNOPQRSTUVWXYZ56789;"
     let code = "";

     for(let i =0;i<number;i++){
       let onePortionCode = Math.floor(Math.random()*elements.length);
       code +=  elements.charAt(onePortionCode)
     }
     return resolve(code)

    })
     
}