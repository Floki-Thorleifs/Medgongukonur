import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserResults from '../userResults/UserResults';

//import './Wall.scss';

class Day extends Component {
  static propTypes = {
    data: PropTypes.array,
    name: PropTypes.string
  };
  state = {
    isClicked: false
  };
  render() {
    const handleClick = () => {
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }));
    };
    const { data, name } = this.props;
    const bloods = data.map((i, index) => {
      return <UserResults blood={i} key={index} />;
    });
    if (this.state.isClicked) {
      return (
        <div className="user">
          <h3 onClick={handleClick}>{name}</h3>
          <div className="user__data">
            <ul>{bloods}</ul>
          </div>
        </div>
      );
    }
    return (
      <div className="user">
        <h3 onClick={handleClick}>{name}</h3>
      </div>
    );
  }
}

export default Day;
