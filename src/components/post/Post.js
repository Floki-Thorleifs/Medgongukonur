import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Post.scss';

class Post extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  render() {
    const { data } = this.props;

    function getAuth() {
      if (data) {
        const comments = data.comments.map((i, index) => {
          return (
            <p className="postItem__comments--single" key={index}>
              {i}
            </p>
          );
        });
        return (
          <div className="postItem">
            <Link to={data.name} className="postItem__name">
              {data.name}
            </Link>
            <h3 className="postItem__content">{data.content}</h3>
            <div className="postItem__comments">{comments}</div>
          </div>
        );
      }
      return (
        <div className="postItem">
          <Link to="/" className="postItem__name">
            Unknown
          </Link>
          <h3 className="postItem__content">Question?</h3>
          <div className="postItem__comments">
            <p className="postItem__comments--single">
              This is a stupid Question
            </p>
          </div>
        </div>
      );
    }
    return <div>{getAuth()}</div>;
  }
}

export default Post;
