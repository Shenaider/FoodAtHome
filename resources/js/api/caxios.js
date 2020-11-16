/* eslint-disable */
import axios from 'axios'
import { AuthenticationStore } from '../store/authentication.js'

let axiosObject = null

axiosObject = axios.create({
// `baseURL` will be prepended to `url` unless `url` is absolute.
// It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
// to methods of that instance
baseURL: webservice_url, // eslint-disable-line no-undef

// `withCredentials` indicates whether or not cross-site Access-Control requests
// should be made using credentials
withCredentials: true
})

axiosObject.CancelToken = axios.CancelToken

/**
 * INTERCEPTORS
 */
axiosObject.interceptors.request.use(function (config) {
  if (AuthenticationStore.getters.AUTHENTICATED) {
    config.headers.Authorization = 'Bearer ' + AuthenticationStore.state.jwtToken
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axiosObject.interceptors.response.use(function (response) {
  if (response.headers['regenerated-token']) {
    AuthenticationStore.commit('JWT_TOKEN', response.headers['regenerated-token'])
  }
  response.data = JSON.parse(response.data)
  return response
}, function (error) {
  let errorMessage = 'MSG_ERROR_UPDATE'
  if (error.response) {
    switch (error.response.status) {
      case 401:
        errorMessage = 'WITHOUT_PERMISSIONS'
        break
      case 404:
        errorMessage = 'GENERIC_NOT_FOUND'
        break
      case 500:
        errorMessage = 'MSG_ERROR_UPDATE'
        break
      default:
        errorMessage = 'MSG_ERROR_UPDATE'
    }
  }
  return Promise.reject(errorMessage)
})

export const CustomAxios = axiosObject
