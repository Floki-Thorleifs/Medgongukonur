import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';
import { fetchChat, createChat } from '../../api/thunk/chat';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import './Wall.scss';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      chat: '',
      error: null,
      question: '',
      redirect: false
    };
  }
  state = {
    isClicked: false
  };
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchChat('/chat'));
  }

  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.handleClick();
    const { dispatch } = this.props;
    const { question } = this.state;
    dispatch(createChat('/chat/question', { question }));


  };

  handleInputChange = e => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  };



  render() {
    const { chat } = this.props;
    let posts;
    if (!(Object.keys(chat).length === 0)) {
      posts = chat.map((i, index) => {
        return <Post data={i} key={index} />;
      });
    } else {
      posts = <h3 className="nothing">Nothing here</h3>;
    }

    return (
      <React.Fragment>
        <div className="question">
          <h2 className="question__question">Submit a question</h2>
          <textarea
            value={this.state.question}
            className="submitQuestion"
            name="question"
            id="question"
            onChange={this.handleInputChange}
          />
          <div className="question__button">
            <button className="question__submit">Submit</button>
          </div>
          {posts}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.chat.isLoading,
    chat: state.chat.chat,
    error: state.chat.error
  };
};
export default connect(mapStateToProps)(Wall);
