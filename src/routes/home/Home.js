import React, { Component } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Post from '../../components/Post';

//todo hafa token a signin
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post />
        <Footer />
      </div>
    );
  }
}

export default Home;
