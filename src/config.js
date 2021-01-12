const apiUrl = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const api_url = process.env.REACT_APP_API_URL;
  return `${api_url}/?apikey=${api_key}`
}


export {
  apiUrl
}