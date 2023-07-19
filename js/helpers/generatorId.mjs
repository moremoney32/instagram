//*****function qui genere le id automatiquement en fonction du temps actuel */

export  function generateUniqueId() {
    
    let tempsActuel = Date.now();
  
    // Compteur pour éviter les conflits si plusieurs IDs sont générés dans le même millisecondes
    let counter = 0;
  
    // Renvoyer l'ID unique en concaténant le timestamp avec le compteur
    return tempsActuel + "_" + counter++;
  }