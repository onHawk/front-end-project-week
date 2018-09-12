import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import SideNav from '../SideNav';

import { addNote } from '../../actions/NoteActions';

class AddNote extends Component {
  state = {
    note: {
      title: '',
      content: '',
    },
  };
  handleTitle = event => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };
  handleContent = event => {
    this.setState({ content: event.target.value });
  };
  handleChange = e => {
    this.setState(state => ({
      ...state,
      note: {
        ...state.note,
        ...e,
      },
    }));
  };
  handleFormSubmit = () => {
    const { note } = this.state;
    console.log(note);
    this.props.addNote(note, this.props.history);
  };

  render() {
    // const { handleFormSubmit } = this.props;
    console.log(this.state.note);
    return (
      <div className={this.props.visible ? 'formal' : 'hide-formal'}>
        <div
          onClick={() => {
            this.props.toggle();
          }}
        >
          {' '}
          X
        </div>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input
              name="title"
              type="text"
              onChange={e => this.handleChange({ title: e.target.value })}
            />

            <label>Write Something...</label>
            <input
              name="content"
              type="textarea"
              onChange={e => this.handleChange({ content: e.target.value })}
            />

            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addNote }
)(AddNote);

// reduxForm({
//   form: 'add',
//   fields: ['title', 'content'],
// })(AddNote);
