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
    
    image.dataset.source = galleryItem.original;

    item.append(link);
    link.append(image);

    galleryElements.push(item);

});
gallery.append(...galleryElements);

console.log(galleryElements);

// ---------------------------------------------------

gallery.addEventListener('click', selectImg);

function selectImg(event) {
    event.preventDefault();
    if (event.target.classList.contains('galery__image')) {
        const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">`);
        instance.show()
    }
};