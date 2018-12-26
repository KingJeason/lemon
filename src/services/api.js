import request from '../utils/request'

export async function loginService(params){
    console.log(params)
    return request.post('/signin', params)
}