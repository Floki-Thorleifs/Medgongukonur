import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './user/User';
import { create } from 'domain';
import {connect} from 'react-redux';
import { fetchLjos } from '../../api/thunk/ljos';


//import './Wall.scss';

class Users extends Component {
  constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			ljos: null,
			error: null,
		};
	}


	componentDidMount() {
    const { dispatch } = this.props;
		dispatch(fetchLjos('/admin'));
	}
  render() {
    
    const { ljos } = this.props;
		console.log(ljos)
    const result = {
      result: '4.6',
      created: '2019'
    };
    const bloodtests = [result, result, result, result];
    const stuff = {
      date: '12.02.19',
      bloodtests: bloodtests
    };

    const tempUser = {
      name: 'siggi',
      dataArr: [stuff, stuff, stuff]
    };

    const tempUsers = [tempUser, tempUser, tempUser];

    const { data } = this.props;
    const users = tempUsers.map((i, index) => {
      return <User data={i.dataArr} name={i.name} key={index} />;
    });
    return (
      <React.Fragment>
        <div class="userwrapper">
          {users}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
	return {
		isLoading: state.ljos.isLoading,
		ljos: state.ljos.ljos,
		error: state.ljos.error,
		isAuthenticated: true
	};
};
export default connect(mapStateToProps)(Users);