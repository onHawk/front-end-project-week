import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import appstyles from '../../App.css';
import homestyles from './homestyles.css';

class Landing extends Component {
  render() {
    return (
      <div className="page-landing">
        <div className="landing">
          <div>
            <img src={require('./lambda.png')} />
          </div>
          <br />
          <div className="intro">
            <div className="titulo">
              <h1>Lambda Notes</h1>
            </div>
            <div className="auths">
              <Link to="/signup" className="link">
                <button className="signer">Register</button>
              </Link>
              <Link to="/signin" className="link">
                <button className="signer">Sign in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
