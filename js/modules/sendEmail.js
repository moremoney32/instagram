

export function sendEmail(data){
   const serviceID = 'service_ecbfu6d';
   const templateID = 'template_c0c961e';
   emailjs.send(serviceID, templateID, data)
      .then(function(response) {
        console.log(response);
      }, function(error) {
        console.log(error);
      });
}