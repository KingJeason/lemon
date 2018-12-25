import { combineReducers, createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import {
    ADD_TODO,
    TOGGLE_TODO,
} from './actions'
const sagaMiddleware = createSagaMiddleware()

const userState = []
const b = {}
function user (state = userState, action) {
    console.log('进入了', action, state)
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}
function aa (state = b, action){
    return b
}

const allReducers = combineReducers({
    user,
    aa
})

const store = createStore(allReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store