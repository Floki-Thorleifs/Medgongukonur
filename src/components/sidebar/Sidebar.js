import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  render() {
    const { data } = this.props;
    function getData() {
      if (data) {
        return <h3 className="sidebar__item">{data.name}</h3>;
      }
      return <h3 className="sidebar__item">User</h3>;
    }
    return (
      <div className="sidebar">
        <div className="sidebar__heading">{getData()}</div>
        <Link to="/login" alt="Home" className="sidebar__item active">
          Login
        </Link>
        <Link to="/" alt="Home" className="sidebar__item">
          My info
        </Link>
        <Link to="/" alt="Home" className="sidebar__item">
          General info
        </Link>
        <Link to="/" alt="Home" className="sidebar__item">
          Chat
        </Link>
      </div>
    );
  }
}

export default Sidebar;
