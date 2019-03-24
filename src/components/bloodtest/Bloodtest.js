import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';
class Bloodtest extends Component {
  static propTypes = {
    data: PropTypes.array
  };
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '',
      result: ''
    };
  }
  state = {
    isClicked: false
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  };
  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.handleClick();
    const { dispatch } = this.props;
    const { date, time, result } = this.state;

    //dispatch(loginUser(username, password));
  };

  render() {
    const { data } = this.props;
    const days = data.map((i, index) => {
      return <Day data={i} key={index} />;
    });
    if (this.state.isClicked) {
      return (
        <React.Fragment>
          <label className="newTest" onClick={this.handleClick}>
            Cancel
          </label>
          <div className="newTest">
            <div className="newTest__input">
              <label htmlFor="testDate">Date:</label>
              <input
                name="date"
                type="text"
                className="testRestult"
                id="testDate"
                value={this.state.date}
                placeholder="12.02.1996"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="newTest__input">
              <label htmlFor="testTime">What time:</label>
              <input
                name="time"
                type="text"
                className="testRestult"
                id="testTime"
                value={this.state.time}
                placeholder="01:00"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="newTest__input">
              <label htmlFor="testData">Bloodsugar:</label>
              <input
                name="result"
                className="testResult"
                id="testData"
                value={this.state.result}
                onChange={this.handleInputChange}
                placeholder="5.5"
                required
              />
            </div>
            <button className="newTest__submit" onClick={this.handleSubmit}>
              Submit results
            </button>
          </div>
          <div className="testResults">{days}</div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <label className="newTest" onClick={this.handleClick}>
          Enter results
        </label>
        <div className="testResults">{days}</div>
      </React.Fragment>
    );
  }
}

export default Bloodtest;
