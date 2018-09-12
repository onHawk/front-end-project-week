import React, { Component } from 'react';
import notestyles from './notestyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { allNotes, deleteNote } from '../../actions/NoteActions';

import Note from './Note';
import SideNav from '../SideNav';
import AddNote from './AddNote';

class NotesPage extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    this.props.allNotes();
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  handleDelete = noteid => {
    this.props.deleteNote(noteid);
  };
  render() {
    console.log(this.props.notes);
    // userNotes = this.props.notes.filter(note => {
    //   return
    // })
    const { notes } = this.props;
    return (
      <div className="notepage">
        <SideNav toggle={this.toggle} />
        <AddNote visible={this.state.visible} toggle={this.toggle} />
        <div className="page-container">
          <h3>Your Notes:</h3>
          <div className="notelist">
            {notes.map((note, i) => {
              return (
                <Note
                  id={note._id}
                  title={note.title}
                  content={note.content}
                  history={this.props.history}
                  handleDelete={this.handleDelete}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.note.notes,
    deleted: state.note.delete,
  };
};

// export default NotesPage;

export default connect(
  mapStateToProps,
  { allNotes, deleteNote }
)(NotesPage);
