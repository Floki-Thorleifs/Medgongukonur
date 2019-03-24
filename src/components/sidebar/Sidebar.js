import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../api/thunk/auth'
import './Sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    data: PropTypes.object,
    site: PropTypes.string
  };

  handleLogout = () => {
    const { dispatch } = this.props;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch(logout());
  }
  render() {
    const { data, site } = this.props;

    function getData() {
      if (data) {
        return <h3 className="sidebar__item">{data.name}</h3>;
      }
      return <h3 className="sidebar__item">Your Midwife</h3>;
    }

    return (
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <div className="sidebar__heading">{getData()}</div>
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
          <Link to="/" onClick={this.handleLogout} alt="login" className="sidebar__item">
            Log Out
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
