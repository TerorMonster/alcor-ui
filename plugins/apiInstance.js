import axios from 'axios'
import multibase from 'axios-multibase'

const API_URLS_DEV = [
  //'http://wax-aa.eu.eosamsterdam.net/',
  'http://api.wax.liquidstudios.io/',
  'http://atomic.wax.tgg.gg/',
  'http://api.wax-aa.bountyblok.io/'
]

const API_URLS_PROD = [
  //'https://wax-aa.eu.eosamsterdam.net/',
  'https://api.wax.liquidstudios.io/',
  'https://atomic.wax.tgg.gg/',
  'https://api.wax-aa.bountyblok.io/'
]

export default function(_, inject) {
  const api = axios.create({
    baseURL: process.env.isDev ? API_URLS_DEV : API_URLS_PROD
  })

  api.interceptors.request.use(multibase)

  inject('api', api)
}
