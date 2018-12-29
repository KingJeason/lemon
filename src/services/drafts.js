import request from '../utils/request'

export async function createDraftsService (params) {
    return request.post('/drafts', params)
}
