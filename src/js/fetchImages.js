import axios from 'axios';

const baseURL = 'https://pixabay.com/api/'
const KEY_API = '42031506-26545a7af84e6a92777e1df63';

export async function fetchImages(keywords, page, perPage) {
    const params = new URLSearchParams({
        key: KEY_API,
        q: keywords,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: perPage
      });

      const result = await axios.get(`${baseURL}?${params}`)

      return result.data
}