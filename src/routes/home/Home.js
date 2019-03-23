import React, { Component } from 'react';

import Header from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'

//todo hafa token a signin
class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Footer />
			</div>
		);
	}

}

export default Home;
