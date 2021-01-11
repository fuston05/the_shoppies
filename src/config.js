
const api_key = process.env.REACT_APP_API_KEY
console.log('apikey: ', api_key)
const api_url = `${process.env.REACT_APP_API_URL}/?apikey=${api_key}`

export {
  api_url
}