import { combineReducers } from 'redux';
import postReducer from './postReducer';
import categoryReducer from './categoryReducer';
import authReducer from './authReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  // posts: postReducer,
  allCategories: categoryReducer,
  user: authReducer,
  messages: messageReducer
});
