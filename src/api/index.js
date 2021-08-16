import axios from 'axios'
import settings from '@/settings'
import router from '@/router'

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
    router.push({ name: '500', params: { error } })
  }

  if (error.response && error.response.status == 401) {
    router.push({ name: 'login' })
  }
  if (error.response && error.response.status == 403) {
    router.push({ name: '403' })
  }
  return Promise.reject(error)
}

api.interceptors.request.use(requestSuccess, requestError)
api.interceptors.response.use(responseSuccess, responseError)

export default api
