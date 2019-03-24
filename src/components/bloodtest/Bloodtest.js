import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';
import { fetchBlood } from '../../api/thunk/blood';
import { connect } from 'react-redux';

import './bloodtest.scss';


/*
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';
import { fetchBlood } from '../../api/thunk/blood';
import {connect} from 'react-redux';



import './bloodtest.scss';

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
		const { dispatch } = this.props;
		dispatch(fetchBlood('/'));
	};

	render() {
		const { blood } = this.props;
		let days;
		if (blood.size) {

			days = blood.map((i, index) => {
				return (
					<Fragment>
						<h2 className="results__recent">Recent results</h2>
						<Day blood={i} key={index} />
					</Fragment>
				);
			});
		} else {
			days = <h3>Nothing to see here</h3>
		}
		if (this.state.isClicked) {
			return (
				<React.Fragment>
					<div className="tests__content">
						<div className="newTest">
							<div className="newTest__input">
								<label htmlFor="testDate" className="newTest__label">Date:</label>
								<input
									name="date"
									type="text"
									className="newTest__result"
									id="testDate"
									value={this.state.date}
									placeholder="12.02.1996"
									onChange={this.handleInputChange}
									required
								/>
							</div>
							<div className="newTest__input">
								<label htmlFor="testTime" className="newTest__label">Time:</label>
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
								<label htmlFor="testData" className="newTest__label">Bloodsugar:</label>
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
							<div class="newTest__buttons">
								<button className="newTest__button" onClick={this.handleSubmit}>
									Submit results
            		</button>
								<button className="newTest__button cancel" onClick={this.handleClick}>
									Cancel
          		</button>
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
}

const mapStateToProps = state => {
	return {
		isLoading: state.blood.isLoading,
		blood: state.blood.blood,
		error: state.blood.error
	};
};
export default connect(mapStateToProps)(Bloodtest);
