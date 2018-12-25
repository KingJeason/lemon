import { delay, takeEvery } from 'redux-saga'
import { put, all } from 'redux-saga/effects'

export function* addUser (data=1) {
    console.log('12313', 'adahaha')
    // yield delay(1000)
    yield put({
        type: 'ADD_TODO',
        text: 1
    })
}

export default function* watchIncrementAsync () {
    yield* takeEvery('add_user', addUser);
}
