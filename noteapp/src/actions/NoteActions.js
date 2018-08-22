import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const ALL_NOTES = 'ALL_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';

const ROOT = 'http://localhost:5000';

const token = localStorage.getItem('id');
axios.defaults.headers.common.Authorization = `bearer ${token}`;

export const allNotes = () => {
  return dispatch => {
    axios
      .get(`${ROOT}/api/notes`, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        dispatch({ type: ALL_NOTES, payload: res.data });
      });
  };
};

export const addNote = (one, history) => {
  return dispatch => {
    axios
      .post(`${ROOT}/api/newnote`, one, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        history.push('/notes');
        dispatch({ type: ADD_NOTE, payload: res.data });
      });
  };
};

export const updateNote = (one, history) => {
  return dispatch => {
    axios
      .put(`${ROOT}/api/updatenote/${one.id}`, one, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        history.push('/notes');
        dispatch({ type: ADD_NOTE, payload: res.data });
      });
  };
};

export const deleteNote = (id, history) => {
  return dispatch => {
    axios
      .delete(`${ROOT}/api/deletenote/${id}`, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        history.push('/notes');
        dispatch({ type: DELETE_NOTE, payload: 'Delete' });
      });
  };
};
