import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const COOKIE = ''

class Http {
  private axiosInstance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config)
    this.axiosInstance.interceptors.response.use((response) => {
      if (response.status === 200) {
        return response
      }
    }, err => {
      return Promise.reject(err)
    })
  }

  public get = (url: string, params = {}) => {
    return this.axiosInstance.get(url, { params: { ...params, cookie: COOKIE } })
  }

}

export default new Http({
  baseURL: process.env.VUE_APP_BASEURL
})