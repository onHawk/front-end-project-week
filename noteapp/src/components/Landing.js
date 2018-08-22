import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
          <Link to="/signin">
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
