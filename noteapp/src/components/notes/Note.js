import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteNote, oneNote } from '../../actions/NoteActions';

const Note = props => {
  return (
    <Link to={`/viewnote/${props.id}`}>
      <div className="cardnote">
        {/* <button type="button" onClick={() => props.handleDelete(props.id)}>
        X
      </button> */}

        <h3 onClick={() => props.oneNote(props.id)}>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </Link>
  );
};

export default connect(
  null,
  { deleteNote, oneNote }
)(Note);
