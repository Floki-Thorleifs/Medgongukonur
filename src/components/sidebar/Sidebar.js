import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Sidebar extends Component {
	static propTypes = {
		data: PropTypes.object
	};
	render() {
		const { data } = this.props;
		function getData() {
			if (data) {
				return <h3 className="sideBar__item">{data.name}</h3>;
			}
			return <h3 className="sideBar__item">User</h3>;
		}
		return (
			<div className="sideBar">
				<h3 className="sideBar__item">{getData()}</h3>
				<Link to="/" alt="Home" className="sideBar__item">
					Home
        </Link>
				<Link to="/" alt="Home" className="sideBar__item">
					My info
        </Link>
				<Link to="/" alt="Home" className="sideBar__item">
					General info
        </Link>
				<Link to="/" alt="Home" className="sideBar__item">
					Chat
        </Link>
			</div>
		);
	}
}

export default Header;
