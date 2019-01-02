import { delay, } from 'redux-saga'
import { put, takeEvery, call, takeLatest } from 'redux-saga/effects'
import { loginService, getmeService } from '../services/api'
import { createDraftsService, updateDraftsService } from '../services/drafts'
import Mes from '../components/Snackbar'
import Cookies from 'js-cookie'
export function* login (data) {
    console.log(data, 'data==')
    // yield delay(1000)
    const res = yield call(loginService, data.params)
    Mes.success('欢迎来到柠檬~')
    Cookies.set('token', res.data.token, { expires: 7 }) // 把token放在cookie里,之后每次发请求带上,保质期为7天
    yield put({
        type: 'SET_USER',
        data: res.data.user
    })
}

export function* getMe () {
    const res = yield call(getmeService)
    // Mes.success('欢迎来到柠檬~')
    yield put({
        type: 'SET_USER',
        data: res.data
    })
}

export function* createDrafts (data) {
    yield delay(500)
    const res = yield call(createDraftsService, data.body)
    console.log(res)
    var stateObj = { draftsId: res.data._id };
    window.history.pushState(stateObj, "page 2", res.data._id);
}
export function* updateDrafts(data){
    console.log(data,'data')
    yield delay(500)
    yield call(updateDraftsService,data.id, data.body)
}
export default function* watchIncrementAsync () {
    yield takeEvery('LOGIN', login);
    yield takeEvery('GET_ME', getMe);
    yield takeLatest('CREATE_DRAFTS', createDrafts)
    yield takeLatest('UPDATE_DRAFTS', updateDrafts)
}