/**
 * Fonction qui envoie des donnees au serveur
 * @param {string} url
 * @param {formData} data
 * @return {Promise}
 */

export function fetchData(url, data) {
    return new Promise((resolve) => {
  
      const dataToSend = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      };
  
      fetch(url, dataToSend)
        .then((response) => {
            if (response.ok) {
                return response.text();
              }  
        })
        .then((result) => {
          resolve({message:result}),console.log(result);
        })
        .catch((error) => {
          resolve({message:error});
        });
    });
  }