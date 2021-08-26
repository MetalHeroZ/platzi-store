const getData = (endpoint) => {
  return fetch(endpoint)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};

export default getData;
