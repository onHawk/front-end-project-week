import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { register } from '../actions/AuthActions';

class Signup extends Component {
  handleForm = credentials => {
    // const credentials = new FormData(event.target);
    this.props.register(credentials, this.props.history);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit(this.handleForm)}>
            <fieldset>
              <label>Username:</label>
              <Field name="username" component="input" type="text" />
            </fieldset>
            <fieldset>
              <label>Password:</label>
              <Field name="password" component="input" type="password" />
            </fieldset>
            <button action="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    success: state.success,
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
