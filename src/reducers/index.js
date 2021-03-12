import animeReducer from './animeReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    anime: animeReducer
});