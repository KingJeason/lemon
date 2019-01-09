import moment from 'moment'
import * as qiniu from 'qiniu-js'
import { getQiNiuTokenService } from '../services/util'
/**
 * file 文件数组
 * pathname window.pathname
 */
export const generateUid = (file, pathname) => {
    // '/drafts/123123'.split('/') ==> ["", "drafts", "123123"]
    const id = pathname.split('/')[2]
    const time = moment().format('YYYY-MM-DD-HH-mm-ss')
    return `${id}-${time}-${file.name}`
}

/**
 * 七牛上传
 */
export const generateQiniu = async (file, key,putExtra = {}, config = {}) => {
    const token = await getQiNiuTokenService()
    const observable = qiniu.upload(file, key, token.data, {}, {})
    return observable
}