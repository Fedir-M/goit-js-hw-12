import{a as L,i as m,S as f}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function v(a){const s=a.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}const H="https://pixabay.com/api/",M="42031506-26545a7af84e6a92777e1df63";async function g(a,r,s){const l=new URLSearchParams({key:M,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s}),{data:e}=await L.get(`${H}?${l}`);return e}function y(a){return a.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:o,comments:i,downloads:_})=>`<a class="gallery__card" href="${s}">
            <img class="gallery__img" src="${r}" alt="${l}"/>

            <ul class="card__text--list">
                    <li class="card__text--item">
                        <h2 class="card__item--title">Likes</h2>
                        <p class="card__item--value">${e}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Views</h2>
                        <p class="card__item--value">${o}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Comments</h2>
                        <p class="card__item--value">${i}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Downloads</h2>
                        <p class="card__item--value">${_}</p>
                    </li>
            </ul>
        </a> 
      `)}const t={formEl:document.querySelector(".input__form"),loader:document.querySelector(".loader"),loading:document.querySelector(".text__loading"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".loadMoreBtn")};let h=null,n=1,d=40,c="";t.formEl.addEventListener("submit",b);t.loadMoreBtn.addEventListener("click",w);async function b(a){a.preventDefault(),c=a.currentTarget.elements.query.value.trim(),n=1,c!==""&&p();try{const r=await g(c,n,d);if(r.totalHits===0)t.loadMoreBtn.classList.add("isHidden"),t.gallery.innerHTML="",m.error({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"topRight",progressBarColor:"white"}),u(),t.formEl.reset();else{u();const s=r.hits,l=y(s).join("");t.gallery.innerHTML="",t.gallery.insertAdjacentHTML("beforeend",l),r.totalHits>d&&t.loadMoreBtn.classList.remove("isHidden"),h=new f(".gallery a").refresh(),t.formEl.reset()}}catch(r){console.log(r)}}async function w(){n+=1,p();try{const a=await g(c,n,d),r=Math.ceil(a.totalHits/d);u();const s=a.hits,l=y(s).join("");t.gallery.insertAdjacentHTML("beforeend",l),t.loadMoreBtn.classList.remove("isHidden"),v(t.gallery),h=new f(".gallery a").refresh(),n>=r&&(m.error({title:"Sorry,",message:"We're sorry, but you've reached the end of search results.",position:"topRight",progressBarColor:"white"}),t.loadMoreBtn.classList.add("isHidden"),u())}catch(a){console.log(a)}}function p(){t.loader.classList.remove("isHidden"),t.loading.classList.remove("isHidden")}function u(){t.loader.classList.add("isHidden"),t.loading.classList.add("isHidden")}
//# sourceMappingURL=commonHelpers.js.map
