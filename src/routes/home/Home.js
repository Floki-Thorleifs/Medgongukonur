import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import Post from '../../components/post/Post';

//todo hafa token a signin
class Home extends Component {
	render() {
		const comments = ['Halló Heimur', 'Nei Þú', 'Þú ert Heimur'];
		const data = {
			comments: comments,
			name: 'Siggi Jónsson',
			content: 'Eru bananar vegan?',
			date: '03/04/2019',
			time: '12:00'
		};
		return (
			<div>
				<Sidebar data={data} />
				<Post data={data} />
				<Footer />
			</div>
		);
	}
}

export default Home;
