import { combineReducers } from 'redux';
import DeckReducer from './DeckReducer';
import GameReducer from './GameReducer';

const rootReducer = combineReducers({
    DeckReducer,
    GameReducer
});

export default rootReducer;