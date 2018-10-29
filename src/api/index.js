import axios from 'axios'
import apiInfo from './apiInfo'
import router from '../router'
import iView from 'iview'
import vue from 'vue'
import Qs from 'qs'
vue.use(router)
vue.use(iView.Message)

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

let apiAxios = function (method, url, params, response, error) {
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
      // 如果不是登录或者get请求，请求头添加Authorization
      const token = window.localStorage.token_access_token
      if (token) {
        let tokenExpiresTime = window.localStorage.token_expires_time
        // 如果token未过期
        if (tokenExpiresTime !== undefined && tokenExpiresTime > new Date().getTime()) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
    }
    return config
  }
)

// 响应拦截
http.interceptors.response.use(
  response => {
    let status = response.status
    switch (status) {
      case 200:
        break
    }
    return Promise.reject(response)
  },
  error => {
    if (error && error.response) {
      let status = error.response.status
      switch (status) {
        case 401:
          iView.Message.warning('需要登录')
          router.push({name: 'AdminLogin'})
          break
        case 403:
          iView.Message.warning('没有权限')
          break
        case 404:
          console.error('http', '请求出错')
          break
        case 500:
          break
      }
    }
    return Promise.reject(error)
  }
)

export default {
  get: function (url, params, response, error) {
    return apiAxios('GET', url, params, response, error)
  },
  post: function (url, params, response, error) {
    return apiAxios('POST', url, params, response, error)
  },
  put: function (url, params, response, error) {
    return apiAxios('PUT', url, params, response, error)
  },
  delete: function (url, params, response, error) {
    return apiAxios('DELETE', url, params, response, error)
  },
  apiInfo: apiInfo
}
