import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
// import {
//     ADD_TODO,
//     TOGGLE_TODO,
// } from './actions'
const sagaMiddleware = createSagaMiddleware()

const userState = null
const draftState = {
    isRequesting: false,
    editorRef: null
}
function user (state = userState, action) {
    switch (action.type) {
        case 'SET_USER':
            return action.data
        default:
            return state
    }
}
function draft (state = draftState, action) {
    switch (action.type) {
        case 'SET_DRAFT_REQUEST_FLAG':
            return {
                ...state,
                isRequesting: action.data
            }
            // break;
        case 'SET_DRAFT_EDITOR_REF':
            return {
                ...state,
                editorRef: action.data
            }
            // break;
        default:
            return state
    }
}

const allReducers = combineReducers({
    user,
    draft
})

const store = createStore(allReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store