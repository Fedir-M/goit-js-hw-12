import{a as L,i as m,S as g}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();function v(o){const s=o.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}const M="https://pixabay.com/api/",b="42031506-26545a7af84e6a92777e1df63";async function f(o,r,s){const l=new URLSearchParams({key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s}),{data:e}=await L.get(`${M}?${l}`);return e}function y(o){return o.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:a,comments:i,downloads:_})=>`<a class="gallery__card" href="${s}">
            <img class="gallery__img" src="${r}" alt="${l}"/>

            <ul class="card__text--list">
                    <li class="card__text--item">
                        <h2 class="card__item--title">Likes</h2>
                        <p class="card__item--value">${e}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Views</h2>
                        <p class="card__item--value">${a}</p>
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
      `)}const t={formEl:document.querySelector(".input__form"),loader:document.querySelector(".loader"),loading:document.querySelector(".text__loading"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".loadMoreBtn")};let h=null,n=1,u=40,c="";t.formEl.addEventListener("submit",H);t.loadMoreBtn.addEventListener("click",w);async function H(o){o.preventDefault(),c=o.currentTarget.elements.query.value.trim(),n=1,c!==""&&p();try{const r=await f(c,n,u);if(r.totalHits===0)t.gallery.innerHTML="",m.error({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"topRight",progressBarColor:"white"}),d(),t.formEl.reset();else{d();const s=r.hits;console.log(r);const l=y(s).join("");t.gallery.innerHTML="",t.gallery.insertAdjacentHTML("beforeend",l),t.loadMoreBtn.classList.remove("isHidden"),h=new g(".gallery a").refresh(),t.formEl.reset()}}catch(r){console.log(r)}}async function w(){n+=1,p(),t.loadMoreBtn.classList.add("isHidden");try{const o=await f(c,n,u),r=Math.ceil(o.totalHits/u);d();const s=o.hits,l=y(s).join("");t.gallery.insertAdjacentHTML("beforeend",l),t.loadMoreBtn.classList.remove("isHidden"),v(t.gallery),h=new g(".gallery a").refresh(),n>=r&&(m.error({title:"Sorry,",message:"We're sorry, but you've reached the end of search results.",position:"topRight",progressBarColor:"white"}),t.loadMoreBtn.classList.add("isHidden"),d())}catch(o){console.log(o)}}function p(){t.loader.classList.remove("isHidden"),t.loading.classList.remove("isHidden")}function d(){t.loader.classList.add("isHidden"),t.loading.classList.add("isHidden")}
//# sourceMappingURL=commonHelpers.js.map
