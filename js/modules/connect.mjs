/**function qui sert de connexion sur son compte instagram */

export function connect(userData) {
     return new Promise((resolve) => {
          const { email, password} = userData;
          const verifyEmailPassword =
               [email, password].includes("");

          let rejectEmail =
               /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let verifieEmail = rejectEmail.test(email);
          let verifiePassword = password.match(
               /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,36}$/
          );

          if (verifyEmailPassword) {
               return resolve({message:"Veuillez remplir tous les champs"});
          }
          if (!verifieEmail) {
               return resolve({message:"veuillez entrer une email valide contenant un @gmail.com ou @yahoo.fr"}
                    
               );
          }
          if (!verifiePassword) {
               return resolve({message:"veuillez entrer 8 caracteres minimun, une majuscule,une minuscule,un caractere spécial"}
                    
               );
          }
          if (!verifyEmailPassword && verifieEmail && verifiePassword) {
               return resolve({data:userData});
          }
     });
}
