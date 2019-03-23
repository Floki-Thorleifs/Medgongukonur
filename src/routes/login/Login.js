import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import SignIn from '../../components/signin/SignIn';

//todo hafa token a signin
class Login extends Component {
  render() {
    return (
      <div>
        <SignIn />
        <Footer />
      </div>
    );
  }
}

export default Login;
