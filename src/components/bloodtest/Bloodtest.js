import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Day from './day/Day';

import './bloodtest.scss';

class Bloodtest extends Component {
	static propTypes = {
		data: PropTypes.array
	};
	render() {
		const { data } = this.props;
		const days = data.map((i, index) => {
			return <Day data={i} key={index} />;
		});
		return (
			<React.Fragment>
				<div class="resultwrapper">
					<div className="results">
						<h2 className="results__recent">Recent results</h2>
						<button className="results__new">+ Enter results</button>
					</div>
					<div className="testResults">{days}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Bloodtest;
