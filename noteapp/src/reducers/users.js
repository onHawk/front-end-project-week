import {
  USER_AUTHENTICATED,
  SUCCESS,
  AUTHENTICATION_ERROR,
} from '../actions/AuthActions';

const initialState = {
  user: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return { ...state, success: action.payload };
    case AUTHENTICATION_ERROR:
      return { ...state, message: action.payload };
    case USER_AUTHENTICATED:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
