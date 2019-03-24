import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
import Wall from '../../components/wall/Wall';

import '../../components/bloodtest/bloodtest.scss';

//todo hafa token a signin
class Chat extends Component {
  render() {
    const comments = ['Halló Heimur', 'Nei Þú', 'Þú ert Heimur'];
    const temp = {
      comments: comments,
      name: 'Siggi',
      content: 'Eru bananar vegan?',
      date: '12.02.1996',
      time: '19:03'
    };

    const temp2 = {
      comments: comments,
      name: 'Hugrún',
      content: 'Eru börn vegan?',
      date: '12.02.1996',
      time: '19:03'
    };

    const temp3 = {
      comments: comments,
      name: 'Flóki',
      content: 'Eru tölvur vegan?',
      date: '12.02.1996',
      time: '19:03'
    };

    const data = {
      posts: [temp, temp2, temp3]
    };
    return (
      <div className="chatwrapper">
        <Sidebar />
        <Wall data={data} />
        <Footer />
      </div>
    );
  }
}

export default Chat;
