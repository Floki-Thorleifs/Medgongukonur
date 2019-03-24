import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from '../../bloodtest/day/Day';
//import { fetchBlood } from '../../api/thunk/blood';
import { connect } from 'react-redux';

import './../Users.scss';

class UserResults extends Component {
  static propTypes = {
    blood: PropTypes.object
  };
  render() {
    const { blood } = this.props;
    const currentDate = new Date(blood.created);

    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var hours = "0" + currentDate.getHours();
    var minutes = currentDate.getMinutes();

    var dateString = date + "-" + (month + 1) + "-" + year + "-" + hours + ":" + minutes;

    return (
      <div className="bloodsugar">
        <p>{blood.result + 'mmol'}</p>
        <p className="bloodsugar__time">{dateString}</p>
      </div>
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
