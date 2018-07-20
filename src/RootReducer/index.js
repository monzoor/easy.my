import { combineReducers } from 'redux';
import adReducer from '../components/Pages/ads/adReducer';
import homeReducer from '../components/Pages/Home/homeReducer';


export default combineReducers({
  // posts: postReducer,
  ad: adReducer,
  ads: homeReducer
});
