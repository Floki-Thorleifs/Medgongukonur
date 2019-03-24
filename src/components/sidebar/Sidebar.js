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
      return <h3 className="sidebar__item">Meðgöngukonur</h3>;
    }



    return (
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <div className="sidebar__heading">{getData()}</div>
          <Link to="/" alt="login" className="sidebar__item active">
            Log Out
        </Link>
          <Link to="/tests" alt="tests" className="sidebar__item">
            My info
        </Link>
        <Link to="/info" alt="info" className="sidebar__item">
          General info
        </Link>
          <Link to="/chat" alt="Chat" className="sidebar__item">
            Chat
        </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
