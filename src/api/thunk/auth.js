import { post2 } from '../api';
import { loginError, receiveLogin, requestLogin, requestLogout, recieveLogout, logoutError } from '../actions/auth';
// Thunk!

export const loginUser = (username, password) => {
    return async (dispatch) => {
      dispatch(requestLogin());
  
      let login;
      try {
        login = await post2('/login',{ username, password });
      } catch (e) {
        return dispatch(loginError(e))
      }
  
      if (!login.loggedin) {
        dispatch(loginError(login.result.error))
      }
  
      if (login.status === 200) {
        const { user, token } = login.result;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        dispatch(receiveLogin(user));
      }
    }
  }

export const logout = () => {
    return async (dispatch) => {
        console.log('fer hingad bitch')
        dispatch(requestLogout());

        let bye;
        try {
            const user = localStorage.getItem('user');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            bye = await post2(`/login?logout=${user}`);
        } catch (e) {
            dispatch(logoutError());
        }
        dispatch(recieveLogout(bye));
    }
}

