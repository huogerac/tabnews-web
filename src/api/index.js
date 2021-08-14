import axios from 'axios'
import settings from '@/settings'

const api = axios.create({
  baseURL: settings.apiBaseUrl,
})

export function requestSuccess(config) {
  const loggedUserJSON = window.localStorage.getItem('loggedUser')

  if (loggedUserJSON) {
    const token = JSON.parse(loggedUserJSON).token
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}

export function requestError(error) {
  return Promise.reject(error)
}

export function responseSuccess(response) {
  return response
}

export function responseError(error) {
  if (!error.response) {
    console.log('Error 500')
  }

  if (error.response && error.response.status == 401) {
    let message = 'Authentication Error (401)'
    if (error.response.data) {
      message = error.response.data.detail
    }
    console.log(message)
  }
  if (error.response && error.response.status == 403) {
    console.log('Error 403')
  }
  return Promise.reject(error)
}

api.interceptors.request.use(requestSuccess, requestError)
api.interceptors.response.use(responseSuccess, responseError)

export default api
