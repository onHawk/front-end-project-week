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
      <div className="page">
        <div className="intro">
          <Link className="link" to="/signin">
            <div className="signer">Sign in</div>
          </Link>
          <form
            className="form-container"
            onSubmit={handleSubmit(this.handleForm)}
          >
            <div className="form">
              <fieldset className="fieldset">
                <label>Username:</label>
                <Field name="username" component="input" type="text" />
              </fieldset>
              <fieldset className="fieldset">
                <label>Password:</label>
                <Field name="password" component="input" type="password" />
              </fieldset>
              <button className="signer" action="submit">
                Register
              </button>
            </div>
          </form>
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
