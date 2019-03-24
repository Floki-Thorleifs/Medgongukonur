import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from '../../bloodtest/day/Day';
//import { fetchBlood } from '../../api/thunk/blood';
import { connect } from 'react-redux';

class UserResults extends Component {
  static propTypes = {
    blood: PropTypes.object
  };
  render() {
    const { blood } = this.props;

    return (
      <li className="user__result__list__item">
        <p>Blóðsykur: {blood.result}</p>
        <p>Tími: {blood.created}</p>
      </li>
    );
  }
}

/*
const mapStateToProps = state => {
  return {
    isLoading: state.blood.isLoading,
    blood: state.blood.blood,
    error: state.blood.error
  };
};*/
export default UserResults;
