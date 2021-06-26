import axios from 'axios'

const api = axios.create({
  baseURL: `${devConfig.BASE_API_URL}api/`,
  headers: {
    Authorization: `Bearer ${getToken()}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})


export const NewApi = {


}