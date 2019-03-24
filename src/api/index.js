import { combineReducers } from 'redux'
import auth from './reducers/auth';
import blood from './reducers/blood';
import chat from './reducers/chat';
import ljos from './reducers/ljos';




export default combineReducers({
    auth,
    blood,
    chat,
    ljos,
})
