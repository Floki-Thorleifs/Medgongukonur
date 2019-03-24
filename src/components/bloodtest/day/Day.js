import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Day extends Component {
  static propTypes = {
    data: PropTypes.object
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
    const { data } = this.props;
    const results = data.data.map((i, index) => {
      return (
        <li className="testResults__day__test" key={index}>
          <p>Blóðsykur: {i.data}</p>
          <p>Tími: {i.time}</p>
        </li>
      );
    });
    if (!this.state.isClicked) {
      return (
        <div className="testResults__day">
          <h3 onClick={handleClick}>{data.date}</h3>
        </div>
      );
    }
    return (
      <div className="testResults__day">
        <h3 onClick={handleClick}>{data.date}</h3>
        <ul className="tests">{results}</ul>
      </div>
    );
  }
}
export default Day;
