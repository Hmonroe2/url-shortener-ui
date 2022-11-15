export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}



export const postData = (data) => {
  const requestData = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      long_url: data.urlToShorten, 
      title: data.title
    }),
  };

  return fetch(`http://localhost:3001/api/v1/urls`, requestData)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Not a 200 status');
      }
      alert('Data submitted')
      return response.json();
    })
    .catch((error) => {
      alert('Oops, something went wrong. Try again later');
    });
}