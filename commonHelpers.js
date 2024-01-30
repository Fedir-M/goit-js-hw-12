import{a as L,i as m,S as g}from"./assets/vendor-951421c8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();function v(o){const l=o.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:l,behavior:"smooth"})}const b="https://pixabay.com/api/",M="42031506-26545a7af84e6a92777e1df63";async function f(o,t,l){const s=new URLSearchParams({key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:l});return(await L.get(`${b}?${s}`)).data}function y(o){return o.map(({webformatURL:t,largeImageURL:l,tags:s,likes:e,views:a,comments:i,downloads:_})=>`<a class="gallery__card" href="${l}">
            <img class="gallery__img" src="${t}" alt="${s}"/>

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
      `)}const r={formEl:document.querySelector(".input__form"),loader:document.querySelector(".loader"),loading:document.querySelector(".text__loading"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".loadMoreBtn")};let h=null,n=1,u=40,c="";r.formEl.addEventListener("submit",w);r.loadMoreBtn.addEventListener("click",H);async function w(o){o.preventDefault(),c=o.currentTarget.elements.query.value.trim(),n=1,c!==""&&p();try{const t=await f(c,n,u);if(t.totalHits===0)r.gallery.innerHTML="",m.error({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"topRight",progressBarColor:"white"}),d(),r.formEl.reset();else{d();const l=t.hits;console.log(t);const s=y(l).join("");r.gallery.innerHTML="",r.gallery.insertAdjacentHTML("beforeend",s),r.loadMoreBtn.classList.remove("isHidden"),h=new g(".gallery a").refresh(),r.formEl.reset()}}catch(t){console.log(t)}}async function H(){n+=1,p(),r.loadMoreBtn.classList.add("isHidden");try{const o=await f(c,n,u),t=Math.ceil(o.totalHits/u);if(n>t)m.error({title:"Sorry,",message:"We're sorry, but you've reached the end of search results.",position:"topRight",progressBarColor:"white"}),d();else{d();const l=o.hits,s=y(l).join("");r.gallery.insertAdjacentHTML("beforeend",s),r.loadMoreBtn.classList.remove("isHidden"),v(r.gallery),h=new g(".gallery a").refresh()}}catch(o){console.log(o)}}function p(){r.loader.classList.remove("isHidden"),r.loading.classList.remove("isHidden")}function d(){r.loader.classList.add("isHidden"),r.loading.classList.add("isHidden")}
//# sourceMappingURL=commonHelpers.js.map
