import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import BloodTest from '../../components/bloodtest/Bloodtest';
import { normalize } from 'path';

import '../../components/bloodtest/bloodtest.scss';

//todo hafa token a signin
class Blood extends Component {
  render() {

    return (
      <div className="bloodwrapper">
        <Sidebar />
        <BloodTest />
        <Footer />
      </div>
    );
  }
}

export default Blood;
