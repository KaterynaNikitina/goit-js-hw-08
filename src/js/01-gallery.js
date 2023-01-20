
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>`
        
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
// galleryContainer.addEventListener("click", onGalleryItemsClick);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

// function onGalleryItemsClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   } 
//   // onModal(evt);
// }

// function onModal(evt) {
//   const instance = basicLightbox.create(
//     `<img src="${evt.target.dataset.source}"/>`,
//     {
//       onShow: (instance) => {
//         document.addEventListener("keydown", onEscKeyPress);
//       },
//       onClose: (instance) => {
//         document.removeEventListener("keydown", onEscKeyPress);
//       },
//     },
    
//   );
//   instance.show()

//   function onEscKeyPress(evt) {
//     if (evt.code ==="Escape") {
//     } instance.close();
    
//   }
// }
