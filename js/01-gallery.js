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

// const galleryItems = images.map(galleryItem => `<div class="gallery__item">
//   <a class="gallery__link" href="${galleryItem.original}">
//     <img
//       class="gallery__image"
//       src="${galleryItem.preview}"
//       data-source="${galleryItem.original}"
//       alt="${galleryItem.description}"
//     />
//   </a>
// </div>`).join('');
// createImg.insertAdjacentHTML('beforeend', galleryItems);

// ---------------------------------------------------

gallery.addEventListener('click', selectImg);

function selectImg(event) {
    
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const imageSrc = event.target.dataset.sourse;

        const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">`, {
            onShow: (instance) => {
                window.addEventListener('keydown', onPressEscKey);
            },
            onClose: (instance) => {
                window.removeEventListener('keydown', onPressEscKey);
            },
        });
    instance.show();
    
        
        window.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                instance.close();
            }
        });
        function onPressEscKey(event) {
            if (event.code !== 'Escape') return;
            instance.close();
        }
    
}



