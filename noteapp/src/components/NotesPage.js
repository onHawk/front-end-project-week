import React, { Component } from 'react';
import notestyles from './notestyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { allNotes } from '../actions/NoteActions';

import Note from './Note';
import SideNav from './SideNav';

class NotesPage extends Component {
  componentDidMount() {
    this.props.allNotes();
  }
  render() {
    console.log(this.props.notes);
    return (
      <div className="notepage">
        <SideNav />
        <h3>Your Notes:</h3>
        {this.props.notes.map((note, i) => {
          return <Note title={note.title} content={note.content} key={i} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.note.notes,
  };
};

// export default NotesPage;

export default connect(
  mapStateToProps,
  { allNotes }
)(NotesPage);
