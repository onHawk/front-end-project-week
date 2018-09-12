import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const ALL_NOTES = 'ALL_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ONE_NOTE = 'ONE_NOTE';

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
        console.log(res.data);
        dispatch({ type: ALL_NOTES, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const oneNote = id => {
  return dispatch => {
    axios
      .get(`${ROOT}/api/notes/${id}`, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        dispatch({ type: ONE_NOTE, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addNote = (note, history) => {
  return dispatch => {
    axios
      .post(`${ROOT}/api/newnote`, note, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        console.log(res.data, 'add action');
        history.push('/notes');
        dispatch({ type: ADD_NOTE, payload: 'Added' });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateNote = (content, history) => {
  return dispatch => {
    axios
      .put(`${ROOT}/api/updatenote/${content.id}`, content, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        history.push('/notes');
        dispatch({ type: ADD_NOTE, payload: res.data });
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    axios
      .delete(`${ROOT}/api/deletenote/${id}`, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        console.log(res.data);

        dispatch({ type: DELETE_NOTE, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
