import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/AuthActions';

import navstyles from './nav.css';

class SideNav extends Component {
  logoutUser = () => {
    this.props.logout(this.props.history);
  };
  render() {
    return (
      <div className="sidebar">
        <h2>Lambda Notes</h2>
        <div className="home-buttons">
          <Link to="/notes">
            <button className="nav-button">View Notes</button>
          </Link>
          <Link to="/AddNote">
            <button className="nav-button">+ Create New Note</button>
          </Link>
        </div>
        <div>
          <Link to="/signin">
            <button className="nav-button" onClick={() => this.logoutUser()}>
              Log out
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(SideNav);
