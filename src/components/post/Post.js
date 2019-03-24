import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Post.scss';

class Post extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  render() {
    const timeMaker = date => {
      const timi = date.substring(11, 16);
      return timi;
    };
    const dateMaker = date => {
      const year = date.substring(0, 4);
      const month = date.substring(5, 7);
      const day = date.substring(8, 10);
      const boi = day + '-' + month + '-' + year;
      return boi;
    };
    const { data } = this.props;
    function getAuth() {
      if (data) {
        const comments = data.comments.map((i, index) => {
          return (
            <div className="postItem__comments--single" key={index}>
              <p>{i.comment}</p>
              <p className="postItem__created">
                {timeMaker(i.created)} - {dateMaker(i.created)}
              </p>
            </div>
          );
        });
        return (
          <div className="container">
            <div className="postItem">
              <div className="postItem__post">
                <div className="postItem__question">
                  <h3 className="postItem__content">{data.question}</h3>
                  <p>
                    {timeMaker(data.created)} - {dateMaker(data.created)}
                  </p>
                </div>
                <div className="postItem__comments">{comments}</div>
                <textarea
                  type="text"
                  name="comment"
                  id="comments"
                  placeholder="Leave a comment"
                  className="postItem__comment"
                />
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
