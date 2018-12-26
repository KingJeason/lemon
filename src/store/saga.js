import { delay,  } from 'redux-saga'
import { put, takeEvery, call  } from 'redux-saga/effects'
import { loginService } from '../services/api'
import Mes from '../components/Snackbar'
import Cookies from 'js-cookie'
export function* login (data=1) {
    console.log(data,'data==')
    // yield delay(1000)
    const res = yield call(loginService, data.params)
    Mes.success('欢迎来到柠檬~')
    Cookies.set('token', res.data.token, { expires: 7 }) // 把token放在cookie里,之后每次发请求带上,保质期为7天
    yield put({
        type: 'SET_USER',
        data: res.data.user
    })
}

export default function* watchIncrementAsync () {
    yield takeEvery('LOGIN', login);
}