import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './../bloodtest.scss';

class Day extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  render() {
    const { data } = this.props;
    const results = data.data.map((i, index) => {
      return (
        <li className="testResults__day__test" key={index}>
          <div className="testResults__day__content">
            <p className="testResults__day__time">{i.time}</p>
            <p>{i.data} mmol</p>
            <p>{data.normal}</p>
          </div>
        </li>
      );
    });
    return (
      <div className="testResults__day">
        <h3>{data.date}</h3>
        <ul className="tests">
          <div className="testResults__day__heading">
            <p>Tími</p>
            <p>Blóðsykur</p>
          </div>
          {results}
        </ul>
      </div>
    );
  }
}

export default Day;
