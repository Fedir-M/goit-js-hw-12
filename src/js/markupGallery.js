
export function galleryMarkup(data) {
  return data.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) =>
      `<a class="gallery__card" href="${largeImageURL}">
            <img class="gallery__img" src="${webformatURL}" alt="${tags}"/>

            <ul class="card__text--list">
                    <li class="card__text--item">
                        <h2 class="card__item--title">Likes</h2>
                        <p class="card__item--value">${likes}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Views</h2>
                        <p class="card__item--value">${views}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Comments</h2>
                        <p class="card__item--value">${comments}</p>
                    </li>

                    <li class="card__text--item">
                        <h2 class="card__item--title">Downloads</h2>
                        <p class="card__item--value">${downloads}</p>
                    </li>
            </ul>
        </a> 
      `
  );
}
