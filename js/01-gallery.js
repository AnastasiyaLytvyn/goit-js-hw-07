import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

const paletteContainer = document.querySelector('.gallery');
const itemsMarkUp = createGalleryItemsMarkup(galleryItems);

paletteContainer.innerHTML = itemsMarkUp;

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>
            </div>`;
    })
    .join('');
}
