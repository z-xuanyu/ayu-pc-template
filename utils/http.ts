import {hash} from "ohash";

// 后端返回的数据类型
export interface ResOptions<T> {
  data?: T;
  code?: number;
  message?: string;
}

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const fetch = async (
  url: string,
  options?: any,
  headers?: any
): Promise<any> => {
  // const {
  //   public: {VITE_API_HOST},
  // } = useRuntimeConfig(); // 3.0正式版环境变量要从useRuntimeConfig里的public拿
  const VITE_API_HOST = "http://1.12.37.242";
  const reqUrl = VITE_API_HOST + url; // 你的接口地址

  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
  const key = hash(JSON.stringify(options) + url);

  // 可以设置默认headers例如
  const customHeaders = {token: useCookie("token").value, ...headers};

  const result: any = await Promise.race([
    useFetch(reqUrl, {...options, key, headers: customHeaders}),
    new Promise((resolve) => setTimeout(resolve, 2000, null)),
  ]);
  return new Promise((resolve) => {
    if (result?.data.value) {
      resolve(result?.data.value);
    } else {
      resolve({data: {items: []}});
    }
  });
};

class Http {
  get(url: string, params?: any, headers?: any): Promise<any> {
    return fetch(url, {method: "get", params}, headers);
  }

  post(url: string, params?: any, headers?: any): Promise<any> {
    return fetch(url, {method: "post", params}, headers);
  }

  put(url: string, params?: any, headers?: any): Promise<any> {
    return fetch(url, {method: "put", params}, headers);
  }

  delete(url: string, params?: any, headers?: any): Promise<any> {
    return fetch(url, {method: "delete", params}, headers);
  }
}

export default new Http();
