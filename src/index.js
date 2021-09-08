import './sass/main.scss';
import menuGallery from './templates/menu-gallery.hbs';
import menu from './menu.json';
import themeToggle from './js/theme-toggle';

const GalleryRef = document.querySelector('.js-menu');
console.log(menuGallery);

const markup = menuGallery(menu);

GalleryRef.insertAdjacentHTML('beforeend', markup);

themeToggle();
///
