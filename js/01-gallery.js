import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = document.querySelector('.gallery');
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
refs.append(...galleryElements);

console.log(galleryElements);

// ---------------------------------------------------

refs.addEventListener('click', selectImg);

function selectImg(event) {
    const index = event.target.dataset.index;

    console.log(index);

}
