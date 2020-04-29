import { combineReducers } from 'redux';
import authentificationReducer from './authentificationReducer';
import systemInfoReducer from './systemInfoReducer'

export default combineReducers({
    authentificationReducer,
    systemInfoReducer
});