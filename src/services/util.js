import request from '../utils/request'

export async function getQiNiuTokenService () {
    return request.get('/qiniu/token')
}

