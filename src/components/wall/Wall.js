import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';
import { fetchChat } from '../../api/thunk/chat';
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
            className="submitQuestion"
            name="question"
            id="question"
            onChange={this.handleInputChange}
          />
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
