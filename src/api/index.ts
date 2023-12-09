import axios, { AxiosRequestConfig } from "axios"
import { notify } from "notiwind"


interface ApiResponse<T> {
  code: number,
  message: string,
}

const api = axios.create({
  headers: { 'Content-Type': 'application/json, multipart/form-data' }
})

export async function request<T>(payload: AxiosRequestConfig): Promise<ApiResponse<T>> {
  try {
    const response = await api.request({ ...payload })
    //
    // do something here
    //
    return response.data
  } catch (error) {
    if (error) notify({ group: 'generic', type: 'error', title: 'Erorr', text: error }, 1000)
  }
}

export const get = <T>(url: string, params: unknown = {}, config: AxiosRequestConfig = {}) => {
  config = { method: 'get', url, params, ...config }
  return request<T>(config)
}

// get<string>('/penis', params: {})
