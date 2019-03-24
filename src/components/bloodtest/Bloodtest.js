import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';
import NewTest from './newTest/NewTest';

class Bloodtest extends Component {
  static propTypes = {
    data: PropTypes.array
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
    const days = data.map((i, index) => {
      return <Day data={i} key={index} />;
    });
    if (this.state.isClicked) {
      return (
        <React.Fragment>
          <label className="newTest" onClick={handleClick}>
            Cancel
          </label>
          <NewTest />
          <div className="testResults">{days}</div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <label className="newTest" onClick={handleClick}>
          Enter results
        </label>
        <div className="testResults">{days}</div>
      </React.Fragment>
    );
  }
}

export default Bloodtest;
