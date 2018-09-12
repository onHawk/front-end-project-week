import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Contents = props => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.content}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    note: state.note.anote,
  };
};
export default connect(mapStateToProps)(Contents);
