import axios from '../until/http.js'

//登陆接口
export const login=(params)=>{
    return axios.post('/api/login',params)
}

//注册接口
export const register=(params)=>{
    return axios.post('/api/register',params)
}

//所有投票接口
export const vote=()=>{
    return axios.get('/vote/allVote')
}