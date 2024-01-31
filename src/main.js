import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { scrollToTop } from './js/scrollTop.js';

import { fetchImages } from './js/fetchImages.js';
import { galleryMarkup } from './js/markupGallery.js';

const refs = {
  formEl: document.querySelector('.input__form'),
  loader: document.querySelector('.loader'),
  loading: document.querySelector('.text__loading'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.loadMoreBtn'),
};

let simplelightboxGallery = null; // N!!! - it could make an issue in the future code(ex: in React) if I use <<let simplelightboxGallery;>>
let page = 1;
let perPage = 40;
let query = '';

refs.formEl.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(evt) {
  evt.preventDefault();

  query = evt.currentTarget.elements.query.value.trim();
  page = 1;

  if (query !== '') {
    onLoaderVisible();
  }

  try {
    const data = await fetchImages(query, page, perPage);

    if (data.totalHits === 0) {
      refs.loadMoreBtn.classList.add('isHidden');
      refs.gallery.innerHTML = '';
      iziToast.error({
        title: 'Sorry,',
        message:
          'there are no images matching your search query. Please try again!',
        position: 'topRight',
        progressBarColor: 'white',
      });
      onLoaderUnVisible();
      refs.formEl.reset();
    } else {
      onLoaderUnVisible();

      const galleryData = data.hits;


      const galleryItems = galleryMarkup(galleryData).join('');

      refs.gallery.innerHTML = '';
      refs.gallery.insertAdjacentHTML('beforeend', galleryItems);

     if(data.totalHits > perPage) {
       refs.loadMoreBtn.classList.remove('isHidden');
     }

      simplelightboxGallery = new SimpleLightbox('.gallery a').refresh();

      refs.formEl.reset();
    }
  } catch (error) {
    console.log(error);
  }
}

async function onLoadMore() {
  page += 1;

  onLoaderVisible();

 

  try {
    const data = await fetchImages(query, page, perPage);
    
    const totalPages = Math.ceil(data.totalHits / perPage);

      onLoaderUnVisible();

      const galleryData = data.hits;

      const galleryItems = galleryMarkup(galleryData).join('');

      refs.gallery.insertAdjacentHTML('beforeend', galleryItems);

      refs.loadMoreBtn.classList.remove('isHidden');

      scrollToTop(refs.gallery);

      simplelightboxGallery = new SimpleLightbox('.gallery a').refresh();

      if (page >= totalPages) {
        iziToast.error({
          title: 'Sorry,',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
          progressBarColor: 'white',
        });
        refs.loadMoreBtn.classList.add('isHidden');
        onLoaderUnVisible();
      } 
    
  } catch (error) {
    console.log(error);
  }
}

function onLoaderVisible() {
  refs.loader.classList.remove('isHidden');
  refs.loading.classList.remove('isHidden');
}

function onLoaderUnVisible() {
  refs.loader.classList.add('isHidden');
  refs.loading.classList.add('isHidden');
}

