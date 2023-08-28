import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />
</a>
</li>`);

gallery.insertAdjacentHTML('beforeend', markup.join(''));
gallery.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    const { target } = evt
    if(!target.classList.contains("gallery__image")) {
        return;
    }


    const lightbox = new SimpleLightbox('.gallery__link', {});


    // const gallerySource = target.dataset.source;
    // const galleryAttributeAlt = target.getAttribute("alt");

    // console.log(gallerySource);
    // console.log(galleryAttributeAlt);
    // console.log(lightbox);
}




// console.log(galleryItems);



