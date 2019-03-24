import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    data: PropTypes.object,
    site: PropTypes.string
  };
  render() {
    const { data, site } = this.props;

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
          <Link
            to="/"
            alt="login"
            className={
              site === 'login' ? 'sidebar__item active' : 'sidebar__item'
            }
          >
            Log Out
          </Link>
          <Link
            to="/tests"
            alt="tests"
            className={
              site === 'tests' ? 'sidebar__item active' : 'sidebar__item'
            }
          >
            My info
          </Link>
          <Link
            to="/info"
            alt="info"
            className={
              site === 'info' ? 'sidebar__item active' : 'sidebar__item'
            }
          >
            General info
          </Link>
          <Link
            to="/chat"
            alt="Chat"
            className={
              site === 'chat' ? 'sidebar__item active' : 'sidebar__item'
            }
          >
            Chat
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
