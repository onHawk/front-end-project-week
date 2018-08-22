import {
  USER_AUTHENTICATED,
  USER_NOTES,
  AUTHENTICATION_ERROR,
} from '../actions/AuthActions';

const initialState = {
  user: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_ERROR:
      return { ...state, message: action.payload };
    case USER_AUTHENTICATED:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
