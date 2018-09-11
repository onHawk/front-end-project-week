import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { register } from '../../actions/AuthActions';

import appstyles from '../../App.css';
import homestyles from './homestyles.css';

class Signup extends Component {
  handleForm = credentials => {
    // const credentials = new FormData(event.target);
    this.props.register(credentials, this.props.history);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="page-landing">
        <div className="intro">
          <div className="loginhead">
            <h1 style={{ color: 'white' }}>Register</h1>
            <div>
              <img src={require('./lambda.png')} />
            </div>
          </div>
          <h3 style={{ color: 'red' }}>{this.props.error}</h3>
          <form className="form" onSubmit={handleSubmit(this.handleForm)}>
            <div className="set">
              <div className="holdfields">
                <fieldset style={{ border: 'none' }} className="fieldset">
                  <label className="labels" style={{ color: 'white' }}>
                    Username :
                  </label>
                  <Field
                    className="fields"
                    name="username"
                    component="input"
                    type="text"
                  />
                </fieldset>

                <fieldset className="fieldset" style={{ border: 'none' }}>
                  <label className="labels" style={{ color: 'white' }}>
                    Password :
                  </label>
                  <Field
                    className="fields"
                    name="password"
                    component="input"
                    type="password"
                  />
                </fieldset>
              </div>
              <div className="link">
                <button className="signer" action="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
          <div style={{ color: 'white', margin: '.5rem' }}>
            Already have an account:
          </div>
          <Link className="link" to="/signin">
            <button className="signer">Sign in</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.message,
  };
};

Signup = connect(
  mapStateToProps,
  { register }
)(Signup);

export default reduxForm({
  form: 'register',
  fields: ['username', 'password'],
})(Signup);
