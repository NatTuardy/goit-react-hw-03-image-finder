import axios from 'axios';

// const BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';

// export const fetchArticles = (query = 'react') => axios.get(BASE_URL + query);

// const URL =
//   'https://pixabay.com/api/?q=cat&page=1&key=16043897-ab8e24fa19c26825a4377ea35&image_type=photo&orientation=horizontal&per_page=12';

const baseUrl = 'https://pixabay.com/api/?q=';

const pageUrl = '&page=';
const keyUrl = '&key=16043897-ab8e24fa19c26825a4377ea35';
const optionsUrl = '&image_type=photo&orientation=horizontal&per_page=12';

export const fetchImage = (query, page) =>
  axios.get(baseUrl + query + pageUrl + page + keyUrl + optionsUrl);
