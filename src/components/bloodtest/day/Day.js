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
    const handleClick = () => {
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }));
    };

    const dateMaker = date => {
      const timi = date.substring(11, 16);
      return timi;
    };
    const { data } = this.props;
    const results = data.bloodtests.map((i, index) => {
      return (
        <li className="testResults__day__test" key={index}>
          <div className="testResults__day__content">
            <div className="testResults__day__wrapper">
              <p className="testResults__day__time tests__element">
                {dateMaker(i.created)}
              </p>
              <p
                className={
                  i.result < 7
                    ? 'testResults__day__data'
                    : 'testResults__day__data--danger'
                }
              >
                {i.result} mmol
              </p>
            </div>
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
            <div className="tests__results">{results}</div>
          </ul>
        </div>
      </div>
    );
  }
}
export default Day;
