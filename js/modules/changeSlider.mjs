/**function qui gere le defilement de slider pendant un intervalle de temps */
export function changeSlider() {
     let counter = 0;
     function nextSlider() {
          let allSlider = document.querySelectorAll(".slide");
          allSlider[counter].classList.remove("active");
          counter = (counter + 1) % allSlider.length;
          allSlider[counter].classList.add("active");
     }

     let slideInterval = setInterval(nextSlider, 3000);
}
