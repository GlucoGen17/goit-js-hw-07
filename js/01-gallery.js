import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = createItemsMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

gallery.addEventListener("click", onClickEvent);

function onClickEvent(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  gallery.addEventListener("keydown", onEsc);

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);

  instance.show();

  function onEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
