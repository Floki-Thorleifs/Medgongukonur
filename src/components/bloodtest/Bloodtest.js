import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';
import { fetchBlood, createBlood } from '../../api/thunk/blood';
import { connect } from 'react-redux';

import './bloodtest.scss';

class Bloodtest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			blood: null,
			error: null,
			dates: '',
			time: '',
			result: ''
		};
	}
	state = {
		isClicked: false
	};

	handleInputChange = e => {
		const { name, value } = e.target;
		console.log(name, value);

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
		const { dates, time, result } = this.state;
		var dagur = dates.substring(0, 2);
		var man = dates.substring(3, 5);
		var ar = dates.substring(6, 10);
		var timi = time.substring(0, 5);

		var date = ar + '-' + man + '-' + dagur + 'T' + timi + ':00.000Z';
		var bloodTest = parseFloat(result);
		const data = {
			bloodTest,
			date
		};
		console.log(data);
		dispatch(createBlood('/', data));
	};

	componentDidMount() {
		const { dispatch, isAuthenticated } = this.props;
		console.log(isAuthenticated);
		if (isAuthenticated) {
			dispatch(fetchBlood('/'));
		}
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchBlood('/'));
	}

<<<<<<< HEAD
  render() {
    const { blood } = this.props;
    let days;
    console.log(blood, !(Object.keys(blood).length === 0));
    if (!(Object.keys(blood).length === 0)) {
      days = blood.map((i, index) => {
        console.log(i);
        return (
          <Fragment>
            <Day data={i} key={index} />
          </Fragment>
        );
      });
    } else {
      days = <h3>Nothing to see here</h3>;
    }
    if (this.state.isClicked) {
      return (
        <React.Fragment>
          <div className="tests__content">
            <div className="newTest">
              <div className="newTest__input">
                <label htmlFor="testDate" className="newTest__label">
                  Date:
=======
	render() {
		const { blood } = this.props;
		console.log(blood)
		let days;
		console.log(blood, !(Object.keys(blood).length === 0));
		if (!(Object.keys(blood).length === 0)) {
			days = blood.map((i, index) => {
				console.log(i);
				return (
					<Fragment>
						<h2 className="results__recent">Recent results</h2>
						<Day data={i} key={index} />
					</Fragment>
				);
			});
		} else {
			days = <h3>Nothing to see here</h3>;
		}
		if (this.state.isClicked) {
			return (
				<React.Fragment>
					<div className="tests__content">
						<div className="newTest">
							<div className="newTest__input">
								<label htmlFor="testDate" className="newTest__label">
									Date:
>>>>>>> f4b21f0e2a04fac7dedb82b53ef971767c471ef4
                </label>
								<input
									name="dates"
									type="text"
									className="newTest__result"
									id="testDate"
									value={this.state.dates}
									placeholder="12.02.1996"
									onChange={this.handleInputChange}
									required
								/>
							</div>
							<div className="newTest__input">
								<label htmlFor="testTime" className="newTest__label">
									Time:
                </label>
								<input
									name="time"
									type="text"
									className="newTest__result"
									id="testTime"
									value={this.state.time}
									placeholder="01:00"
									onChange={this.handleInputChange}
									required
								/>
							</div>
							<div className="newTest__input">
								<label htmlFor="testData" className="newTest__label">
									Bloodsugar:
                </label>
								<input
									name="result"
									className="newTest__result"
									id="testData"
									value={this.state.result}
									onChange={this.handleInputChange}
									placeholder="5.5"
									required
								/>
							</div>
							<div className="newTest__buttons">
								<button className="newTest__button" onClick={this.handleSubmit}>
									Submit results
                </button>
								<button
									className="newTest__button cancel"
									onClick={this.handleClick}
								>
									Cancel
                </button>
<<<<<<< HEAD
              </div>
            </div>
            <div className="testResults">
              <h2 className="results__recent">Recent results</h2>
              {days}
            </div>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <button className="results__new" onClick={this.handleClick}>
          + Enter results
        </button>
        <div className="testResults">
          <h2 className="results__recent">Recent results</h2>
          {days}
        </div>
      </React.Fragment>
    );
  }
=======
							</div>
						</div>
						<div className="testResults">{days}</div>
					</div>
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				<button className="results__new" onClick={this.handleClick}>
					+ Enter results
        </button>
				<div className="testResults">{days}</div>
			</React.Fragment>
		);
	}
>>>>>>> f4b21f0e2a04fac7dedb82b53ef971767c471ef4
}

const mapStateToProps = state => {
	return {
		isLoading: state.blood.isLoading,
		blood: state.blood.blood,
		error: state.blood.error,
		isAuthenticated: true
	};
};
export default connect(mapStateToProps)(Bloodtest);
