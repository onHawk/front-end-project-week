import { combineReducers } from 'redux';
import NoteReducer from './notes';
import AuthReducer from './users';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducer,
  note: NoteReducer,
  form: FormReducer,
});

export default rootReducer;
