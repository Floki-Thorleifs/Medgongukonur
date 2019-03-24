import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserResults from '../userResults/UserResults';

import './../Users.scss';

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
        <div className="user daybutton">
          <h3 onClick={handleClick} className="user__date">{name}</h3>
          <div className="user__data">
            <div className="user__results">
              <div className="tests__heading">
                <p className="tests__element">Tími</p>
                <p className="tests__element">Blóðsykur</p>
              </div>
              {bloods}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="user daybutton">
        <h3 onClick={handleClick} className="user__date">{name}</h3>
      </div>
    );
  }
}

export default Day;
