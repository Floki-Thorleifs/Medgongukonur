import React, { Component } from 'react';


import Header from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'
//import Post from '../../components/post/Post';

//todo hafa token a signin
class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Post />
				<Footer />
			</div>
		);
	}

}

export default Home;
