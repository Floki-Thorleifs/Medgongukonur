import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import BloodTest from '../../components/bloodtest/Bloodtest';

//todo hafa token a signin
class Blood extends Component {
  render() {

    return (
      <div>
        <BloodTest/>
        <Footer />
      </div>
    );
  }
}

export default Blood;
