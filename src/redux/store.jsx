import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import phoneReducer from 'redux/phone/reducerPhone'
import tvReducer from 'redux/tv/reducerTv'
import commentReducer from './comments/reducerComments';

const rootReducer = combineReducers({
  phone: phoneReducer,
  television: tvReducer,
  comments: commentReducer
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;