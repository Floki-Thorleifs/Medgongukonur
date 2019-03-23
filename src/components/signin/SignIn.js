import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { loginUser } from '../../api/thunk/auth';


import './SignIn.scss';

const { check, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isFetching: false,
      isAuthenticated:false,
      message:null
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { username, password } = this.state;
    console.log(username, password);
    dispatch(loginUser(username, password));
  };

  render() {
    const { username, password } = this.state;
    const { isFetching, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <div>
          <Route exact path="/login" render={() => <Redirect to="/" />} />
        </div>
      );
    }
    return (
      <div className="login">
        <div className="login__input">
          <label htmlFor="inputUsername">Username</label>
          <input
            name="username"
            id="inputUsername"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Username"
            required
            autoFocus
            className="form-control"
          />
        </div>
        <div className="login__input">
          <label htmlFor="inputPassword">Password</label>
          <input
            name="password"
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <button className="login__button" onClick={this.handleSubmit}>
          Login
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message
  };
};
export default connect(mapStateToProps)(SignIn);
