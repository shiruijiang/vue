import Axios from "axios";

let httpAxios=Axios.create({
    timeout:2000
})
// 添加请求拦截器
httpAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //给请求头里添加authorization字段(token),得以获取数据
    return {
        ...config,
        headers:{
            ...config.headers,
            'authorization':`Bearer ${window.localStorage.token}`
        }
    }   
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
httpAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default httpAxios