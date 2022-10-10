import {combineReducers} from 'redux'
import homeworksReducer from './HomeworksReducer'
import usersReducer from './usersReducer'


const rootReducer = combineReducers({
    homeworksReducer,
    usersReducer
})

export default rootReducer