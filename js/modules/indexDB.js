export function openBaseDonne(objectStoreName) {
     return new Promise((resolve) => {
          const indexedDB =
               window.indexedDB ||
               mozindexedDB ||
               window.webkitindexedDB ||
               shim.indexedDB;
          const baseDonne = indexedDB.open("connexion", 1);
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
          };
     });
}

// verification de l email dans la base de donnee

export function verifyEmail(bd, objectStoreName, email) {
     return new Promise((resolve) => {
          let enterContactDb = bd.transaction([objectStoreName], "readonly");
          let emailPassword = enterContactDb.objectStore(objectStoreName);
          const emailIndex = emailPassword.index("emailIndex");

          const requestEmail = emailIndex.get(email);
          requestEmail.onsuccess = function (event) {
               const result = event.target.result;
               return resolve(result);
          };
     });
}

//ajout des elements dans la base de donne

export function addUserData(bd, objectStoreName, data) {
     return new Promise((resolve) => {
          let enterContactDb = bd.transaction([objectStoreName], "readwrite");
          let emailPasswordStore = enterContactDb.objectStore(objectStoreName);

          let addEmailPassword = emailPasswordStore.add(data);

          addEmailPassword.onsuccess = function () {
               return resolve("Inscription reussie");
          };
          addEmailPassword.onerror = function () {
               return resolve(" cet email est deja utilise veuillez changer");
          };
     });
}
