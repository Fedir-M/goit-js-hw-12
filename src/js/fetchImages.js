// const BASE_URL = 'https://pixabay.com/api/';
// const options = {
//   key: '42031506-26545a7af84e6a92777e1df63',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true
// };

// export function fetchResponce(query) {
//   return fetch(
//     `${BASE_URL}/?key=${options.key}&q=${query}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}`
//   ).then(responce => responce.json());
// }

export function fetchImages(keywords) {
    const KEY_API = '42031506-26545a7af84e6a92777e1df63';
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: KEY_API,
        q: keywords,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: 1,
        per_page: 9
      });
   const url = `${BASE_URL}${END_POINT}?${PARAMS}`;

   return fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
   })

}