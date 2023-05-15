import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryElements = galleryItems.map(({ original, preview, description }) => {
    const html = `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `;
    
    gallery.insertAdjacentHTML('beforeend', html);
});

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
        
        function onPressEscKey(event) {
            if (event.code == 'Escape') {
                instance.close();
            }
        }
    
}



