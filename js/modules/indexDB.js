

export function openBaseDonne(objectStoreName,objectStoreCode) {
     return new Promise((resolve) => {
          const indexedDB =
               window.indexedDB ||
               mozindexedDB ||
               window.webkitindexedDB ||
               shim.indexedDB;
          const baseDonne = indexedDB.open("connexionInscription", 1);
          let db;
          baseDonne.onerror = function () {
               resolve("erreur de connexon de la base de donnee");
          };

          baseDonne.onsuccess = function (event) {
               db = event.target.result;
               
               resolve(db);
          };

          baseDonne.onupgradeneeded = function (event) {
               db = event.target.result;
               
               if (!db.objectStoreNames.contains(objectStoreName)) {
                    let emailPassword = db.createObjectStore(objectStoreName, {
                         keyPath: "id",
                    });
                    emailPassword.createIndex("emailIndex", "email", {
                         unique: true,
                    }); //unicite de l email
               }
               if(!db.objectStoreNames.contains(objectStoreCode)){
                    let objectCode =  db.createObjectStore(objectStoreCode, {
                         keyPath: "id",
                    });
                    objectCode.createIndex("codeIndex", "code", {
                         unique: true,
                    })
               }
          };
     });
}

// verification de l email dans la base de donnee

export function verifyEmail(bd, objectStoreName, email) {
     return new Promise((resolve) => {
          let enterContactDb = bd.transaction([objectStoreName], "readonly");
          let emailStore = enterContactDb.objectStore(objectStoreName);
          const emailIndex = emailStore.index("emailIndex");

          const objectEmail = emailIndex.get(email);
          
          objectEmail.onsuccess = function (event) {
              
               const result = event.target.result;
              if(result){
                         
               return resolve("email confirmer");
               }
               return resolve('email inconnu veuilez creer un compte')
          
          };
          objectEmail.onerror = function (){
              
               return resolve("erreur de recuperation")
          
       }
     });
}

//ajout des elements dans la base de donne

export function addUserData(bd, objectStoreName, data) {
     return new Promise((resolve) => {
          let enterContactDb = bd.transaction([objectStoreName], "readwrite");
          let emailPasswordStore = enterContactDb.objectStore(objectStoreName);

          let addEmailPassword = emailPasswordStore.add(data);

          addEmailPassword.onsuccess = function () {
               let connectUrl = "./connect.html"
               return resolve("Inscription reussie"),window.location.href = connectUrl;
          };
          addEmailPassword.onerror = function () {
               return resolve(" cet email est deja utilise veuillez changer");
          };
     });
}

//function qui verifie si le mot de passe et l email concorde
export function verifyEmailPassword(bd,objectStoreName,email,password){
     return new Promise((resolve)=>{
          const enterContactDb = bd.transaction([objectStoreName],"readonly")
          const emailPasswordStore = enterContactDb.objectStore(objectStoreName)
          const emailIndex = emailPasswordStore.index("emailIndex")
         
          const objectEmailStore =  emailIndex.get(email);
               objectEmailStore.onsuccess = function (e){
                    
                    const objectStore = e.target.result
                   
                    if(objectStore && objectStore.password === password){
                         
                    return resolve("conexion reussi")
                    }
              return resolve('Votre mot de passe ou email est incorrect')
                         }
               objectEmailStore.onerror = function (){
              
                  return resolve("erreur de recuperation")
             
          }

     })
}

export function addUserDataCode(bd, objectStoreCode, data) {
     return new Promise((resolve) => {
          let enterContactDb = bd.transaction([objectStoreCode], "readwrite");
          let codeStore = enterContactDb.objectStore(objectStoreCode);
          let confirmationCodeEmailUrl = "./confirmationCodeEmail.html"

          let objectCode = codeStore.add(data);
          console.log( objectCode)

          objectCode.onsuccess = function () {
               
               return resolve("code ajoute"),window.location.href = confirmationCodeEmailUrl;
          };
          
     });
}
