import { combineReducers } from 'redux';
import NoteReducer from './notes';
import AuthReducer from './users';

const rootReducer = combineReducers({
  auth: AuthReducer,
  notes: NoteReducer,
});

export default rootReducer;
