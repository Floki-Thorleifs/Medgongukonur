import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Post extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  render() {
    const { data } = this.props;
    function get() {
      if (data) {
        return <h3 className="sideBar__item">{data.name}</h3>;
      }
      return <h3 className="sideBar__item">User</h3>;
    }

    function getName() {
      if (data) {
        return (
          <Link to={data.name} className="postItem__name">
            {data.name}
          </Link>
        );
      }
      return (
        <Link to="/" className="postItem__name">
          Unknown
        </Link>
      );
    }
    return <div className="postItem">{getName()}</div>;
  }
}

export default Post;
