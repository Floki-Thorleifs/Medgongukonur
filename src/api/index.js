import { combineReducers } from 'redux'
import auth from './reducers/auth';
import blood from './reducers/blood';


export default combineReducers({
    auth,
    blood,
})
