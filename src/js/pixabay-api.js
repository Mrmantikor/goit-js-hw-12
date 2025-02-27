export const fetchPhotos = searchedQuery => {
  const params = new URLSearchParams({
    key: '49057632-e26b1425a2b98c2ae15bc1d5b',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
