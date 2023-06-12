export function sign(userData){

    return new Promise((resolve)=>{
     
        const {email,password,userName,sodoName} = userData;
        const verifyEmailPassword = [email,password,userName,sodoName].includes('') === true;

        let rejectEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let verifieEmail = rejectEmail.test(email) === false;
        let verifiePassword = password.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,36}$/
      );

        
      if(verifyEmailPassword){
        return resolve("Veuillez remplir tous les champs");
      }
      if(verifieEmail){
        return resolve("veuillez entrer une email valide contenant un @gmail.com ou @yahoo.fr");
      }
      if(verifiePassword){
        return resolve("veuillez entrer 8 caracteres minimun, une majuscule,une minuscule,un caractere spécial");
      }
      if(!verifyEmailPassword && !verifieEmail && !verifiePassword){
       
        return  resolve(userData)
      }
      
    })

}