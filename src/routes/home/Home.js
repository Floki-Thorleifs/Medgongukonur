import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import Wall from '../../components/wall/Wall';

//todo hafa token a signin
class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar site="info" />
        <Footer />
      </div>
    );
  }
}

export default Home;
