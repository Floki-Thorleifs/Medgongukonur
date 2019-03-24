import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Post.scss';

class Post extends Component {
  static propTypes = {
    data: PropTypes.array
  };
  render() {
    const { data } = this.props;
    function getAuth() {
      if (data) {
        console.log(data.comments);
        const comments = data[0].comments.map((i, index) => {
          console.log(index);
          return (
            <p className="postItem__comments--single" key={index}>
              {i}
            </p>
          );
        });
        return (
          <div className="container">
            <div className="postItem">
                <ul>
                  <li>{data.result}</li>
                  <li>{data.created}</li>
                </ul>
              <div className="postItem__post">
                <div className="postItem__question">
                  <h3 className="postItem__content">{data.question}</h3>
                </div>
                <div className="postItem__comments">{comments}</div>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="container">
          <div className="postItem">
            <Link to="/" className="postItem__info">
              Unknown
            </Link>
            <h3 className="postItem__content">Question?</h3>
            <div className="postItem__comments">
              <p className="postItem__comments--single">
                This is a stupid Question
              </p>
            </div>
          </div>
        </div>
      );
    }
    return <div>{getAuth()}</div>;
  }
}

export default Post;
