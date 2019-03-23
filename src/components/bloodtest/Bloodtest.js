import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';

class Bloodtest extends Component {
	static propTypes = {
		data: PropTypes.array
	};
	render() {
		const { data } = this.props;
		const days = data.map((i, index) => {
			return <Day data={i} key={index} />;
		});
		return <div className="testResults">{days}</div>;
	}
}

export default Bloodtest;
