import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { login } from '../../actions/AuthActions';

class Signin extends Component {
  handleFormSubmit = credentials => {
    this.props.login(credentials, this.props.history);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="page-landing">
        <h3>{this.props.error}</h3>
        <div className="loginhead">
          <h1 style={{ color: 'white' }}>Log in</h1>
          <div>
            <img src={require('./lambda.png')} />
          </div>
        </div>
        <form className="signin" onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className="signform">
            <div className="inputs">
              <fieldset className="fieldform" style={{ border: 'none' }}>
                <label className="labels">Username:</label>
                <Field
                  className="fields"
                  placeholder="username"
                  name="username"
                  component="input"
                  type="text"
                />
              </fieldset>
              <fieldset className="fieldform" style={{ border: 'none' }}>
                <label className="labels">Password:</label>
                <Field
                  className="fields"
                  placeholder="password"
                  name="password"
                  component="input"
                  type="password"
                />
              </fieldset>
            </div>
            <div className="link" style={{ margin: '4rem 0 0 0' }}>
              <button className="signer" action="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
        <div>
          <Link to="/signup" className="link">
            <button className="signer">Sign Up</button>
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

Signin = connect(
  mapStateToProps,
  { login }
)(Signin);
export default reduxForm({
  form: 'logIn',
})(Signin);
