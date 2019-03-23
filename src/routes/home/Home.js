import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import Post from '../../components/post/Post';

//todo hafa token a signin
class Home extends Component {
  render() {
    const comments = ['Halló Heimur', 'Nei Þú', 'Þú ert Heimur'];
    const data = {
      comments: comments,
      name: 'Siggi',
      content: 'Eru bananar vegan?'
    };
    return (
      <div>
        <Sidebar />
        <Post data={data} />
        <Footer />
      </div>
    );
  }
}

export default Home;
