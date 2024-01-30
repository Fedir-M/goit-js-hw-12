import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/fetchImages.js';
import { galleryMarkup } from './js/markupGallery.js';

const refs = {
  formEl: document.querySelector('.input__form'),
  loader: document.querySelector('.loader'),
  loading: document.querySelector('.text__loading'),
  gallery: document.querySelector('.gallery'),
};

let simplelightboxGallery = null; // N!!! - it could make an issue in the future code(ex: in React) if I use <<let simplelightboxGallery;>>


refs.formEl.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const searchQuery = evt.currentTarget.elements.query.value.trim();
  //* const searchQuery = refs.formEl.query.value.trim(); N! - the 2nd variant of typing, common acces to element

  if (searchQuery !== '') {
    onLoaderVisible()
  }

  fetchImages(searchQuery).then(data => {
    if (data.totalHits === 0) {
      refs.gallery.innerHTML = '';
      iziToast.error({
        title: 'Sorry,',
        message:
          'there are no images matching your search query. Please try again!',
        position: 'topRight',
        progressBarColor: 'white',
      });
      onLoaderUnVisible()
    } else {
      onLoaderUnVisible()

      const galleryData = data.hits;

      const galleryItems = galleryMarkup(galleryData).join('');

      refs.gallery.innerHTML = '';
      refs.gallery.insertAdjacentHTML('beforeend', galleryItems);

      simplelightboxGallery = new SimpleLightbox('.gallery a').refresh();
    }
  }).catch(error => console.log(error)).finally(() => refs.formEl.reset());
}

function onLoaderVisible() {
  refs.loader.classList.remove('isHidden');
  refs.loading.classList.remove('isHidden');
}

function onLoaderUnVisible() {
  refs.loader.classList.add('isHidden');
  refs.loading.classList.add('isHidden');
}