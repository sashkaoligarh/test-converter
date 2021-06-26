import axios from 'axios'
import { API_URL, API_KEY } from '../Configs/api-config'


const api = axios.create({
  baseURL: `${API_URL}/`,
  headers: {
    'Content-Type': 'application/json',
    "x-rapidapi-key": `${API_KEY}`,
    "x-rapidapi-host": "fixer-fixer-currency-v1.p.rapidapi.com",
    "useQueryString": true
  },
})


export const Api = {
  getAllCurrencies(){
    return api.get(`symbols`)
  },
  convert(data){
    return api.get(`convert`, {data})
  },
  convertToAll(data){
    return api.get(`latest`, {data})
  }

}