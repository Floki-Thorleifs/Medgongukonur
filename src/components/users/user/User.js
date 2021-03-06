import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from '../day/Day';

import './../Users.scss';

class User extends Component {
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
    console.log(`data = ${data}`);
    console.log(`name = ${name}`);

    const bloods = data.map((i, index) => {
      return <Day data={i.bloodtests} name={i.date} key={index} />;
    });

    if (this.state.isClicked) {
      return (
        <div className="user userbutton">
          <h3 onClick={handleClick} className="user__name">{name}</h3>
          <div className="user__data">
            {bloods}
          </div>
        </div>
      );
    }

    return (
      <div className="user userbutton">
        <h3 onClick={handleClick} className="user__name">{name}</h3>
      </div>
    );
  }
}

export default User;
