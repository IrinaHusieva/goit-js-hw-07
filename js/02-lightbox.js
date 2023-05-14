import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryElements = [];

galleryItems.forEach(galleryItem => {

    const item = document.createElement('li');
    const link = document.createElement('a');
    const image = document.createElement('img');

    
    item.classList.add('gallery__item');
    link.classList.add('gallery__link');
    image.classList.add('gallery__image');
    
    link.href = galleryItem.original;
    image.src = galleryItem.preview;
    image.alt = galleryItem.description;

    item.append(link);
    link.append(image);

    galleryElements.push(item);

});
gallery.append(...galleryElements);

console.log(galleryElements);

// -------------------------------------------
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});

