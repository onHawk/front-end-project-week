import React, { Component } from 'react';
import notestyles from './notestyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { allNotes } from '../../actions/NoteActions';

import Note from './Note';
import SideNav from '../SideNav';
import AddNote from './AddNote';

class NotesPage extends Component {
  state = {
    visible: false,
  };

  componentWillMount() {
    this.props.allNotes();
  }

  toggleForm = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    console.log(this.props.notes);
    // userNotes = this.props.notes.filter(note => {
    //   return
    // })
    const { notes } = this.props;
    return (
      <div className="notepage">
        <SideNav toggle={this.toggleForm} />
        <AddNote visible={this.state.visible} toggle={this.toggleForm} />
        <div className="page-container">
          <h3>Your Notes:</h3>
          <div className="notelist">
            {notes.map((note, i) => {
              return <Note title={note.title} content={note.content} key={i} />;
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
  };
};

// export default NotesPage;

export default connect(
  mapStateToProps,
  { allNotes }
)(NotesPage);
