import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './../bloodtest.scss';

class Day extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  state = {
    isClicked: false
  };
  render() {
    console.log(this.state.isClicked);
    const handleClick = () => {
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }));
    };
    const { data } = this.props;
    const results = data.data.map((i, index) => {
      return (
        <li className="testResults__day__test" key={index}>
          <div className="testResults__day__content">
            <div className="testResults__day__wrapper">
              <p className="testResults__day__time tests__element">{i.time}</p>
              <p className="testResults__day__data">{i.data} mmol</p>
            </div>
            <p class="testResults__day__normal">{data.normal}</p>
          </div>
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
      <div className="testContainer">
        <div className="testResults__day">
          <h3 onClick={handleClick}>{data.date}</h3>
          <ul className="tests">
            <div className="tests__heading">
              <p className="tests__element">Tími</p>
              <p className="tests__element">Blóðsykur</p>
            </div>
            <div className="tests__results">
              {results}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
export default Day;
