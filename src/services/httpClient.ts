import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com/alexanderboliva/test/main/api_example.json',
})
