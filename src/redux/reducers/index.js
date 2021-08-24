import { combineReducers } from "redux";

import phoneReducer from 'redux/phone/reducerPhone';
import tvReducer from 'redux/tv/reducerTv';

export default combineReducers({
  phone: phoneReducer,
  television: tvReducer,
});