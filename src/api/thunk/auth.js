import { post2 } from '../api';
import { loginError, receiveLogin, requestLogin,requestLogout,recieveLogout, logoutError } from '../actions/auth';
// Thunk!
export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch(requestLogin());

    let user;
    try {
      user = await post2('/login',{username,password});
      console.log(username,password)
      console.log(user)
    } catch (e) {
        console.log('CATCH BITCH')
      return dispatch(loginError(e))
    }

    if (user.status === 200) {
      localStorage.setItem('user', username);
    }else if(user.status === 401){
        console.log('fer hingad')
        return dispatch(loginError(user.result.error))
    }
    dispatch(receiveLogin());

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

