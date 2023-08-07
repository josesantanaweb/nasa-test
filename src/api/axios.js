import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
})

export default api
