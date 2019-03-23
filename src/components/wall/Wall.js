import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';

//import './Wall.scss';

class Wall extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  render() {
    const { data } = this.props;
    console.log(data);
    const posts = data.posts.map((i, index) => {
      return <Post data={i} key={index} />;
    });

    return <div>{posts}</div>;
  }
}

export default Wall;
