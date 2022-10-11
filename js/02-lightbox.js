import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector(".gallery");
const itemsMarkUp = createGalleryItemsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", itemsMarkUp);
paletteContainer.addEventListener("click", onImageClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

function onImageClick(event) {
    event.preventDefault();
    if(event.target.classList.contains('.gallery__image')){
        return;
    }
}

const lightBox = new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay:250 });