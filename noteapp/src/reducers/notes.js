// import { DELETE_NOTE } from '../actions/DeleteAction';

import { ADD_NOTE, ALL_NOTES, DELETE_NOTE } from '../actions/NoteActions';

const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, new: action.payload };
    case ALL_NOTES:
      return { ...state, notes: action.payload };
    case DELETE_NOTE:
      return { ...state, delete: action.payload };
    default:
      return state;
  }
};
