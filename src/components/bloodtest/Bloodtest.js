import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';
import { fetchBlood } from '../../api/thunk/blood';
import {connect} from 'react-redux';



/*
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';
import { fetchBlood } from '../../api/thunk/blood';
import {connect} from 'react-redux';



class Bloodtest extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            isLoading: false,
            blood: null,
            error: null,
    }
}
componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBlood('/'));
  }


	render() {
        const { blood } = this.props;
        if(blood.size){
		const days = blood.map((i, index) => {
			return <Day blood={i} key={index} />;
		});
        return <div className="testResults">{days}</div>;
    }return( 
    <React.Fragment>
    <h1 className='testResults'>Nothing here to see</h1>
    </React.Fragment>);

	}
}
const mapStateToProps = state => {
    return {
      isLoading: state.blood.isLoading,
      blood: state.blood.blood,
      error: state.blood.error
    };
  };
export default connect(mapStateToProps)(Bloodtest);

*/

class Bloodtest extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            isLoading: false,
            blood: null,
            error: null,
            date: '',
            time: '',
            result: '',

    }
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

  };

  componentDidMount() {
    const { dispatch,  isAuthenticated} = this.props;
    console.log(isAuthenticated)
    if(isAuthenticated){
    dispatch(fetchBlood('/'));
    }
  };

  render() {
    const { blood } = this.props;
    let days;
    if(blood.size){

     days = blood.map((i, index) => {
      return <Day blood={i} key={index} />;
    });
}else{
    days = <h3>Nothing to see here</h3>
}
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

const mapStateToProps = state => {
    return {
      isLoading: state.blood.isLoading,
      blood: state.blood.blood,
      error: state.blood.error,
      isAuthenticated: true,
    };
  };
export default connect(mapStateToProps)(Bloodtest);
