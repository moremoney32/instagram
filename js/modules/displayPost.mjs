/**function qui affiche les posts */

export function displayPost(arrayInfo){
  

    let htmlPost = "";

    arrayInfo.forEach((info)=>{

        htmlPost += `

                            <div class="sous-section2-1-2-child1">
                                <div class="sous-section2-1-2-child1-header-title">
                                    <img src="./assets/images/jugalux.jpg" alt="">
                                    <div class="sous-section2-1-2-child1-header-title-span">
                                        <span  class="sous-section2-1-2-child1-header-title-span1">Ray Hammond is at <span  class="sous-section2-1-2-child1-header-title-span2">New-York,United States</span></span>
                                        <span  class="sous-section2-1-2-child1-header-title-span3">Thursday,jun 31, ${info.idPost}:50 PM</span>
                                    </div>
                                </div>
                                <img src="./assets/icons/suspension.svg" alt="">
                            </div>
                            <div class="sous-section2-1-2-child2">
                               
                                <div class="sous-section2-1-2-child2-emogis">
                                    <span>${info.description}</span>
                                </div>
                            </div>
                            <div class="sous-section2-1-2-child3">
                                <img src="${info.image}" alt="">
                                <video controls>
                                <source src="${info.video}" type="video/mp4">
                                </video>

                            </div>
                            <div class="sous-section2-1-2-child4">
                               <div class="sous-section2-1-2-child4-img">
                                <img src="./assets/images/gabbi.jpg" alt="">
                                <img src="./assets/images/nathalie.jpg" alt="">
                                <img src="./assets/images/eunice.jpg" alt="">
                                <img src="./assets/images/arianeee.jpg" alt="">
                                <span>+ 245 Likes</span>
                               </div>
                               <div class="sous-section2-1-2-child4-icons">
                                    <div class="sous-section2-1-2-child4-sous-icons">
                                        <img src="./assets/icons/hearth.svg" alt="">
                                        <span>Likes</span>
                                    </div>
                                    <div class="sous-section2-1-2-child4-sous-icons">
                                        <img src="./assets/icons/messages.svg" alt="">
                                        <span>8Comments</span>
                                    </div>
                                    <div class="sous-section2-1-2-child4-sous-icons">
                                        <img src="./assets/icons/messages.svg" alt="">
                                        <span>0Shares</span>
                                    </div>
                               </div>

                            </div>
                            <div class="sous-section2-1-2-child5">
                                <input type="text" placeholder="write comment"/>
                                <img src="./assets/images/franck.png" alt="" class="franck2"> 
                                <img src="./assets/icons/letter.svg" alt="" class=" letter-icons">
                                <img src="./assets/icons/cinema.svg" alt="" class=" cinema-icons">
                                <img src="./assets/icons/music.svg" alt="" class=" music-icons">
                            </div>
      
        ` 
    })
  document.querySelector("#sous-section2-1-2").insertAdjacentHTML("afterend",htmlPost)//beforebegin

}