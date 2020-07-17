import {combineReducers} from 'redux';
import reducers from './reducers';
const rootReducer = combineReducers({
  root: reducers
})
export default rootReducer