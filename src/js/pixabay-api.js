import axios from 'axios';

export const fetchPhotos = async (searchedQuery, currentPage) => {
  const options = {
    params: {
      key: '49057632-e26b1425a2b98c2ae15bc1d5b',
      q: searchedQuery,
      page: currentPage,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get('https://pixabay.com/api/', options);
};
