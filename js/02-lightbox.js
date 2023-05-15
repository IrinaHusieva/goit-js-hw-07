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

// -------------------------------------------
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});

