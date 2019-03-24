import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';
import { fetchChat, createChat } from '../../api/thunk/chat';
import { connect } from 'react-redux';

import './Wall.scss';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      chat: '',
      error: null,
      question: ''
    };
  }
  state = {
    isClicked: false
  };
  componentWillMount() {
    const { dispatch } = this.props;
    console.log();
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
    const {question} =this.state;
    console.log(question)
    dispatch(createChat('/chat/question', question));
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    console.log(name, value);

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
          <textarea
          value={this.state.question}
            className="submitQuestion"
            name="question"
            id="question"
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
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
