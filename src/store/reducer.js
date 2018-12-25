import { combineReducers , createStore} from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
} from './actions'

const userState = {}
const b = {}
function user (state = userState, action) {
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

const store = createStore(allReducers)


export default store