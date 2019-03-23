import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import BloodTest from '../../components/bloodtest/Bloodtest';

//todo hafa token a signin
class Login extends Component {
  render() {
    const data = '4.5';
    const times = '09:00';
    const result = {
      data: data,
      time: times
    };
    const temp1 = {
      date: '12.02.1996',
      data: [result, result, result]
    };
    const temp2 = {
      date: '13.03.1993',
      data: [result, result, result]
    };

    const komp = [temp1, temp2];
    return (
      <div>
        <BloodTest data={komp} />
        <Footer />
      </div>
    );
  }
}

export default Login;
