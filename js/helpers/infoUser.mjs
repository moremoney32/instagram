/**** cette fonction stocke les informations  dun utilisateur dans le localStorage */

export function infoUser(userData) {
     let connexion = JSON.parse(localStorage.getItem("connexion"));

     if (connexion === null) {
          return localStorage.setItem("connexion", JSON.stringify(userData));
     } else if (connexion !== null) {
          localStorage.removeItem("connexion");

          return localStorage.setItem("connexion", JSON.stringify(userData));
     }
}
