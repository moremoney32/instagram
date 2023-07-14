/***
 * function qui cree les donnees du post
 */
export function displayPostDonnees(){
    let htmlinfo;

    htmlinfo = `
    <div class="posts-donnees">
    <div class="sous-posts-donnees">
    <div class="post-infos">
        <div class="post-infos-img">
            <img src="./assets/images/femme1.jpg" alt="">
            <div class="sous-post-infos-img">
                <div class="sous-post-infos-img-name">
                    <span>Franck Tchouta</span>
                    <img src="./assets/icons/down.svg" alt="">
                </div>
                <span class="Visibilite">Visibilite:tout le monde</span>
            </div>
        </div>
        <img src="./assets/icons/close.svg" alt="" class="close">
    </div>
    <div class="post-input">
        <input type="text" placeholder="Que souhaitez vous postez" id="post-input-input"/>
    </div>
    <div class="post-emoticone">
        <span class="emogis-click">🙂</span> 
        <span name="" id="textarea" ></span> 
    </div>
    <div class="all-video-pictures">
        <div class="sous-all-video-pictures img-pictures">
            <span class="sous-all-video-pictures-span ">Ajouter une photo</span>
            <input type="file" id="update-picture-input" style="display: none;">
            <img src="./assets/icons/pictures.svg" alt="" id="update-picture">

        </div>
       
        <div class="sous-all-video-pictures imgvideo">
            <span class="sous-all-video-pictures-span">Ajouter une video</span>
            <input type="file" id="update-picture-video" style="display: none;">
            <img src="./assets/icons/camera.svg" alt="" id="update-video">
            
        </div>
       
            <div class="sous-all-video-pictures imgvideo img-pictures">
                <span class="sous-all-video-pictures-span"> un calendrier</span>
            <img src="./assets/icons/calendar.svg" alt="">
        </div>
       
            <div class="sous-all-video-pictures imgvideo  img-pictures">
                <span class="sous-all-video-pictures-span">Ajouter encore</span>
            <img src="./assets/icons/suspension.svg" alt="">
        </div>
       
    </div>
</div>
<div class="post-information">
    <div class="alarm-post">
        <img src="./assets/icons/alarms.svg" alt="">
        <span class="publier">publier</span>
    </div>

</div>
</div>

    ` 
    document.querySelector("#sous-section2-1-2").innerHTML = htmlinfo

}