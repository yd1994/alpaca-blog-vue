import axios from 'axios'
import apiInfo from './apiInfo'
import router from '../router'
import vue from 'vue'
import Qs from 'qs'
vue.use(router)

let http = axios.create({
  baseURL: 'api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  transformRequest: [function (data) {
    // p判断是否是 FormData 类型
    if (Object.prototype.toString.call(data) === '[object FormData]') {
      return data
    }
    return Qs.stringify(data)
    /*
    let newData = new URLSearchParams()
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData.append(encodeURIComponent(k), encodeURIComponent(data[k]))
      }
    }
    return newData
    */
  }]
})

let apiAxios = function (method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null
  }).then(function (res) {
    response(res)
  }).catch(function (err) {
    response(err)
  })
}

// 请求拦截
http.interceptors.request.use(
  config => {
    let url = config.url
    if (url !== '' && url.indexOf('/oauth/token') === -1 && config.method !== 'get') {
      const token = window.localStorage.token_access_token
      if (token) {
        let tokenExpiresTime = window.localStorage.token_expires_time
        if (tokenExpiresTime !== undefined && tokenExpiresTime > new Date().getTime()) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      console.info('http.interceptors.request', config)
    }
    return config
  }
)

// 响应拦截
http.interceptors.response.use(
  response => {
    console.info('axios response:', response)
    let status = response.status
    switch (status) {
      case 200:
        break
    }
    return Promise.reject(response)
  },
  error => {
    console.error('axios response error:', error)
    let status = error.status
    switch (status) {
      case 401:
        router.push({name: 'AdminLogin'})
        break
      case 403:
        router.push({name: 'AdminLogin'})
        break
      case 404:
        break
      case 500:
        break
    }
    return Promise.reject(error)
  }
)

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  },
  apiInfo: apiInfo
}
