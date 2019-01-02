import request from '../utils/request'

export async function createDraftsService (body) {
    return request.post('/drafts', body)
}

export async function updateDraftsService (id, body) {
    return request.put(`/drafts/${id}`, body)
}

export async function showDraftsService (id) {
    return request.get(`/drafts/${id}`)
}

