/***function qui affiche une photo ou une video selon les donnnes du tableau 
 *@param {object} postInfo
 @return {object} function
 * ***/
export function mediaFactory(postInfo) {
     if (postInfo.hasOwnProperty("image") === true) {
          return createImage(postInfo.image);
     }
     return createVideo(postInfo.video);
}
function createImage(imgSrc) {
     return `
        <img src="${imgSrc}" alt=""/>
        `;
}
function createVideo(videoSrc) {
     return ` <video controls>
        <source src="${videoSrc}" type="video/mp4">
        </video>`;
}
