import { post2 } from '../api';
import { loginError, receiveLogin, requestLogin,requestLogout,recieveLogout, logoutError } from '../actions/auth';
// Thunk!
export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch(requestLogin());

    let user;
    try {
      user = await post2('/login',{username,password});
    } catch (e) {
      return dispatch(loginError(e))
    }
    dispatch(receiveLogin());

    if (user.status === 200) {
      localStorage.setItem('user', username);
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    dispatch(requestLogout());

    let bye;
    try{
      const user = localStorage.getItem('user');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      bye = await post2(`/login?logout=${user}`);
    }catch(e){
      dispatch(logoutError());
    }
    dispatch(recieveLogout(bye));
  }
}

