import React, { Component } from 'react';
import notestyles from './notestyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { allNotes, deleteNote, oneNote } from '../../actions/NoteActions';
import Contents from './NoteContents';

class FullNote extends Component {
  componentDidMount() {
    //   console.log(id);
    this.props.allNotes();
  }

  render() {
    const id = this.props.match.params.id;
    const { notes } = this.props;
    const onenote = notes.filter(note => {
      return id.toString() === note._id.toString();
    });

    // this.props.oneNote(id);
    console.log(onenote);
    return (
      <div>
        <div>Note</div>

        <div>
          {onenote.map(note => {
            return (
              <Contents
                key={note._id}
                title={note.title}
                content={note.content}
              />
            );
          })}
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

export default connect(
  mapStateToProps,
  { deleteNote, oneNote, allNotes }
)(FullNote);
