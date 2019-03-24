import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import GeneralInfo from '../../components/info/Info';

class Info extends Component {
  render() {

    return (
      <div className="chatwrapper">
        <Sidebar site="info" />
        <GeneralInfo />
        <Footer />
      </div>
    );
  }
}

export default Info;
