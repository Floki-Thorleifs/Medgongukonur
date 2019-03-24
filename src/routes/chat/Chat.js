import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import Wall from '../../components/wall/Wall';

import '../../components/bloodtest/bloodtest.scss';

//todo hafa token a signin
class Chat extends Component {
  render() {

    return (
      <div className="chatwrapper">
        <Sidebar />
        <Wall/>
        <Footer />
      </div>
    );
  }
}

export default Chat;
