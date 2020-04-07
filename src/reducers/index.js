import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import usersReducer from './usersReducer';

//assigning variable name to data returned by reducers

export default combineReducers({
  posts: postReducer,
  users: usersReducer
});