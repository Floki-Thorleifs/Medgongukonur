import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './user/User';
import { create } from 'domain';

//import './Wall.scss';

class Users extends Component {
  static propTypes = {
    users: PropTypes.array
  };
  render() {
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
      dataArr: stuff
    };

    const tempUsers = [tempUser, tempUser, tempUser];

    const { data } = this.props;
    const users = tempUsers.map((i, index) => {
      return <User data={i.dataArr} name={i.name} key={index} />;
    });
    return <React.Fragment>{users}</React.Fragment>;
  }
}

export default Users;
