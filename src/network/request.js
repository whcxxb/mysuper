import axios from "axios";

export function request(config){
  //创建axios实例
  const net1 = axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000
  })
   
  //axios 请求拦截器
  net1.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })
  
  //相应拦截
  net1.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err);
  })

  //发送实际的网络请求
  return net1(config)
}