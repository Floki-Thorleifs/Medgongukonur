import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Day extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  render() {
    const { data } = this.props;
    const results = data.data.map((i, index) => {
      return (
        <li className="testResults__day__test" key={index}>
          <p>Blóðsykur: {i.data}</p>
          <p>Tími: {i.time}</p>
        </li>
      );
    });
    return (
      <div className="testResults__day">
        <h3>{data.date}</h3>
        <ul className="tests">{results}</ul>
      </div>
    );
  }
}

export default Day;
