import { displayElement } from "../widgets/displayElement.mjs";
import { displayIndexDb } from "../widgets/displayIndexDb.mjs";

//** Intersection Observer pour détecter quand les éléments de post deviennent visible */
export function intersectionObserver(data) {
     const dataNumber = 3;
     displayElement(data, 0, dataNumber);
     const limiteObservation = document.querySelector("#limiteObservation");
     function loadElementsOnScroll(entries) {
          entries.forEach((entry) => {
               if (entry.isIntersecting) {
                    // posts est visible
                    const container =
                         document.querySelector("#sous-section2-1-2");
                    const currentLastIndex = container.children.length;

                    const nextLastIndex = currentLastIndex + dataNumber;
                    console.log(nextLastIndex);
                    if (nextLastIndex >= data.length) {
                         return (
                              document
                                   .querySelector("#limiteObservation")
                                   .remove(),
                              observer.unobserve(limiteObservation)
                         );
                    }

                    return (
                         displayElement(data, currentLastIndex, nextLastIndex),
                         document.querySelector("#limiteObservation").remove(),
                         observer.unobserve(limiteObservation),
                         (limiteObservation = null),
                         console.log(limiteObservation)
                    );
               }
          });
     }

     const options = {
          root: null,
          rootMargin: "0px",
          threshold: 1,
     };
     let observer = new IntersectionObserver(loadElementsOnScroll, options);
     observer.observe(limiteObservation);
}
