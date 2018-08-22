import axios from 'axios';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const SUCCESS = 'SUCCESS';

export const USER_NOTES = 'USER_NOTES';

const token = localStorage.getItem('id');
axios.defaults.headers.common.Authorization = `bearer ${token}`;

const ROOT = 'http://localhost:5000';

export function authError(error) {
  if (error) {
    return {
      type: AUTHENTICATION_ERROR,
      payload: error,
    };
  }
}

export const register = (credentials, history) => {
  return dispatch => {
    axios
      .post(`${ROOT}/api/register`, credentials, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        localStorage.setItem('id', res.data.token);
        history.push('/notes');
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export function login(credentials, history) {
  return dispatch => {
    axios
      .post(`${ROOT}/api/login`, credentials, {
        headers: { Authorization: `bearer ${localStorage.getItem('id')}` },
      })
      .then(res => {
        localStorage.setItem('id', res.data.token);
        axios.defaults.headers.common.Authorization = `bearer ${
          res.data.token
        }`;
        console.log(res.data.user);
        dispatch({ type: 'USER_NOTES', payload: res.data.user.notes });
        dispatch({ type: 'USER_AUTHENTICATED', payload: res.data.user });
        history.push('/notes');
      })
      .catch(err => {
        if (err) console.log('error: ', err);
        if (err.response) {
          dispatch(authError('Username/Password invalid.'));
        }
      });
  };
}
