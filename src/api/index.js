import { combineReducers } from 'redux'
import auth from './reducers/auth';
import blood from './reducers/blood';
import chat from './reducers/chat';



export default combineReducers({
    auth,
    blood,
    chat,
})
