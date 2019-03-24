import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import SignIn from '../../components/signin/SignIn';

import '../../components/signin/SignIn.scss';

//todo hafa token a signin
class Login extends Component {
  render() {
    return (
      <div className="loginContainer">
        <SignIn site="login" />
        <Footer />
      </div>
    );
  }
}

export default Login;
