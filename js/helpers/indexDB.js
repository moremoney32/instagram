

export function openBaseDonne(objectStoreName,objectStoreCode,objectStoreFile) {
     return new Promise((resolve) => {
          const indexedDB =
               window.indexedDB ||
               mozindexedDB ||
               window.webkitindexedDB ||
               shim.indexedDB;
          const baseDonne = window.indexedDB.open("connexionInscription", 1);
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
               if(!db.objectStoreNames.contains(objectStoreFile)){
                    let objectFile =  db.createObjectStore(objectStoreFile, {
                         keyPath: "id",
                    });
                   
               }
          };
     });
}

//ajout des fichiers dans la base de donnee
export function addFile(bd,objectStoreFile,file){
     return new Promise((resolve) => {
               let  enterFiles = bd.transaction([objectStoreFile], "readwrite");
               let objectStore = enterFiles.objectStore(objectStoreFile);
               //let codeIndex = objectStore.index("objectfiles");
               //let getFile = codeIndex.get(file);
       
               let updateFile = objectStore.add(file);
               updateFile.onsuccess = function(event){
                   return resolve("fichier ajoute");
               }     
     })
}
//***function qui permet de recuperer les fichiers dans la base de donnee */

export function recupererTousLesFichiers(bd,objectStoreFile) {
     return new Promise((resolve) => {
       
           let transaction = bd.transaction([objectStoreFile], "readwrite");
           let objectStore = transaction.objectStore(objectStoreFile);
   
           // Ouvrir un curseur pour parcourir tous les enregistrements de l'object store
           let request = objectStore.openCursor();
           let fichiers = [];
   
           request.onsuccess = function(event) {
             let cursor = event.target.result;
             console.log(cursor)
             if (cursor) {
               // Ajouter le fichier au tableau des fichiers
               fichiers.push(cursor.value);
               console.log(fichiers)
              // resolve(fichiers)
               cursor.continue();
             } else {
                //Résoudre la promesse avec le tableau complet des fichiers
                console.log(fichiers)
               resolve(fichiers);
             }
           };
   
           request.onerror = function(event) {
             reject("Erreur lors de la récupération des fichiers");
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
                         
               return resolve({message1:"email confirmer"});
               }
               return resolve({message2:"email inconnu veuilez creer un compte"})
          
          };
          objectEmail.onerror = function (){
              
               return resolve("erreur de recuperation")
          
       }
     });
}

//ajout des elements dans la base de donne

export function addUserData(bd, objectStoreName, data,email) {
     return new Promise((resolve) => {
          let enterContactDb = bd.transaction([objectStoreName], "readwrite");
          let emailPasswordStore = enterContactDb.objectStore(objectStoreName);
          let emailIndex = emailPasswordStore.index("emailIndex");
          let objectEmail = emailIndex.get(email)
           emailPasswordStore.add(data);
           
          objectEmail.onsuccess = function (e) {
               const result = e.target.result;
               if(result){
                    console.log(result)
                    return resolve({message2:"cet adresse email est deja utilisee"});
               }
               return  resolve({message1:"Inscription reussie"})
               
               
          };
          objectEmail.onerror = function () {
               return resolve("cet adresse email est deja utilisee");
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
                    
                   
                    if(objectStore && objectStore.password === password && objectStore.authentification === true){
                         
                         return resolve("connexion reussi")
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

          let objectCode = codeStore.add(data);
          

          objectCode.onsuccess = function () {
               
               return resolve("code ajoute")
          };
          
     });
}
//***function qui verifie si le code est dans la base de donnee */


export function verifyCode(bd, objectStoreName, code) {
     return new Promise((resolve) => {
          let enterContactDb = bd.transaction([objectStoreName], "readonly");
          let codeStore = enterContactDb.objectStore(objectStoreName);
          let codeIndex = codeStore.index("codeIndex");

          let objectEmail = codeIndex.get(code);
          let userInscription = JSON.parse(localStorage.getItem("userInscription"))
          
          objectEmail.onsuccess = function (event) {
              
               const result = event.target.result;
               
              if(result&& result.id ===userInscription.id){
                         
               return resolve({message1:"code confirmer"});
               }
               return resolve({message2:"vous avez entrer le mauvais code"})
          
          };
          objectEmail.onerror = function (){
              
               return resolve("erreur de recuperation")  
       }
     });
}

export function updateInfoUser (db,objectStoreName){

let enterContactDb = db.transaction(objectStoreName, 'readwrite');
let objectEmailStore = enterContactDb.objectStore(objectStoreName);
let userInscription = JSON.parse(localStorage.getItem("userInscription"))
let emailIndex = objectEmailStore.index("emailIndex");

let getObjectEmail = emailIndex.get(userInscription.email);
          getObjectEmail.onsuccess = (e)=>{
               const result  = e.target.result
               if(result){
                    result.authentification = true

                    let updateObjectEmail = objectEmailStore.put(result);
                    updateObjectEmail.onsuccess = () => {
                         console.log('Authentification mis à jour avec succès');
                       };
                       
                       updateObjectEmail.onerror = () => {
                         console.error("Erreur lors de la mise à jour");
                       };
               }else{
                    console.log('authentification  non trouvé');
               }
          } 
          
   
}


export function updateInfoUserPassword (db,objectStoreName,password){

     let enterContactDb = db.transaction(objectStoreName, 'readwrite');
     let objectEmailStore = enterContactDb.objectStore(objectStoreName);
     let userInscription = JSON.parse(localStorage.getItem("userInscription"))
     console.log(userInscription)
     let emailIndex = objectEmailStore.index("emailIndex");
     
     let getObjectEmail = emailIndex.get(userInscription.email);
               getObjectEmail.onsuccess = (e)=>{
                    const result  = e.target.result
                    if(result){
                         console.log(result)
                         result.password = password
                         result.authentification = true
     
                         let updateObjectEmail = objectEmailStore.put(result);
                         updateObjectEmail.onsuccess = () => {
                              console.log('mot de passe mit a jour');
                            };
                            
                            updateObjectEmail.onerror = () => {
                              console.error("Erreur lors de la mise à jour");
                            };
                    }else{
                         console.log('mot de passe non trouvé');
                    }
               } 
               
        
     }
     // Fonction pour récupérer tous les fichiers de IndexedDB

   // Exemple d'affichage des fichiers sur le DOM
  