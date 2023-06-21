export function debounce(nextSlider) {
     return new Promise((resolve) => {
          let slideInterval;

          slideInterval = setInterval(() => {
               clearInterval(slideInterval);
               return resolve(nextSlider());
          }, 2000);
     });
}
