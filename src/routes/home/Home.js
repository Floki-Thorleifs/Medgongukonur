import React, { Component } from 'react';


import Sidebar from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
//import Post from '../../components/post/Post';

//todo hafa token a signin
class Home extends Component {
	render() {
		return (
			<div>
				<Sidebar />
				<Footer />
			</div>
		);
	}

}

export default Home;
