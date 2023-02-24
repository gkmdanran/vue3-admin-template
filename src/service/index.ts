import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import { BASE_URL } from './config'
interface IResponseData {
    code: number | string;
    data: any;
    message: string;
    [key: string]: any;
}
function request(config: AxiosRequestConfig) {
    const instance: AxiosInstance = axios.create({
        baseURL: BASE_URL,
    })
    instance.interceptors.request.use(
        (config) => {
            return config
        },
        err => {
            ElMessage({
                type: 'warning',
                message: '网络异常，请求失败！',
            })
            return err
        }
    )
    instance.interceptors.response.use(
        (res: AxiosResponse<IResponseData>) => {
            if (res.data.code != 0) {
                ElMessage({
                    type: 'warning',
                    message: res.data.message,
                })
            }
            return res
        },
        err => {
            ElMessage({
                type: 'warning',
                message: '网络异常，响应失败！',
            })
            return err
        }
    )
    return instance(config)
}
export default {
    Get(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<IResponseData> {
        return new Promise((resolve) => {
            request({ ...config, url, params: data, method: 'get' }).then((res: AxiosResponse<IResponseData>) => {
                resolve(res.data)
            })
        })
    },
    Post(url: string, data: object | Array<any> = {}, config: AxiosRequestConfig = {}): Promise<IResponseData> {
        return new Promise((resolve) => {
            request({ ...config, url, data, method: 'post' }).then((res: AxiosResponse<IResponseData>) => {
                resolve(res.data)
            })
        })
    },
    Put(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<IResponseData> {
        return new Promise((resolve) => {
            request({ ...config, url, data, method: 'put' }).then((res: AxiosResponse<IResponseData>) => {
                resolve(res.data)
            })
        })
    },
    Delete(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<IResponseData> {
        return new Promise((resolve) => {
            request({ ...config, url, data, method: 'delete' }).then((res: AxiosResponse<IResponseData>) => {
                resolve(res.data)
            })
        })
    },
    Download(url: string, data: object = {}, config: AxiosRequestConfig = {}) {
        let obj: AxiosRequestConfig = {}
        if (!config.method || config.method == 'get' || config.method == 'GET') {
            obj = { ...config, url, params: data }
        } else {
            obj = { ...config, url, data }
        }
        return new Promise((resolve) => {
            request(obj).then(res => {
                if (config.responseType == 'blob') {
                    const reader = new FileReader()
                    reader.readAsText(res.data, 'utf-8')
                    reader.onload = () => {
                        try {
                            const response = JSON.parse(reader.result as string)
                            if (response.code != 0)
                                ElMessage({
                                    type: 'warning',
                                    message: response.message,
                                })
                            resolve(response)
                        } catch (error) {
                            resolve(res)
                        }
                    }
                } else {
                    resolve(res.data)
                }
            })
        })
    }
}