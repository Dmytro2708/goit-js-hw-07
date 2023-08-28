import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
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
    const gallerySource = target.dataset.source;
    const galleryAttributeAlt = target.getAttribute("alt");
    const instance = basicLightbox.create(`
    <img
    src="${gallerySource}"
    alt="${galleryAttributeAlt}"
    />`)
    instance.show()


    gallery.addEventListener('keydown', handleKeyPress);

    function handleKeyPress(evt) {
    if (evt.key === 'Escape') {
      instance.close();
      gallery.removeEventListener('keydown', handleKeyPress);
    }

}}
