import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '',
      result: ''
    };
  }

  static propTypes = {
    data: PropTypes.object
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { date, time, result } = this.state;

    console.log(date, time, result);
    //dispatch(loginUser(username, password));
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  };
  render() {
    return (
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
    );
  }
}
export default NewTest;
