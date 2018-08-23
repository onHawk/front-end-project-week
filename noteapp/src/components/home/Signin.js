import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { login } from '../../actions/AuthActions';

class Signin extends Component {
  handleFormSubmit = credentials => {
    // const credentials = new FormData(event.target);
    this.props.login(credentials, this.props.history);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <fieldset>
            <label>Username:</label>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <button action="submit">Sign in</button>
        </form>
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
