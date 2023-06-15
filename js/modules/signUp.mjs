export function signUp(userData) {
     return new Promise((resolve) => {
          const { email, password, userName, pseudoName } = userData;
          const isEmptyField = [email, password, userName, pseudoName].includes(
               ""
          );

          let rejectEmail =
               /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let verifyEmail = rejectEmail.test(email);
          let verifyPassword = password.match(
               /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,36}$/
          );

          if (isEmptyField) {
               return resolve({message:"Veuillez remplir tous les champs"});
          }
          if (!verifyEmail) {
               return resolve(
                    {message:"veuillez entrer une email valide contenant un @gmail.com ou @yahoo.fr"
          });
          }
          if (!verifyPassword) {
               return resolve(
                    {message:"veuillez entrer 8 caracteres minimun, une majuscule,une minuscule,un caractere spécial"
          });
          }
          if (!isEmptyField && verifyEmail && verifyPassword) {
               return resolve({data:userData});
          }
     });
}
