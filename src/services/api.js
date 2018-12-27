import request from '../utils/request'

export async function loginService(params){
    return request.post('/signin', params)
}

export async function getmeService(){
    return request.get('user/me')
}