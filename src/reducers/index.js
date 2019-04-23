import { combineReducers } from 'redux';
import GetDeckReducer from './GetDeckReducer';
import ShuffleDeckReducer from './ShuffleDeckReducer';
import DrawDeckReducer from './DrawDeckReducer';
import GameReducer from './GameReducer';

const rootReducer = combineReducers({
    GetDeckReducer,
    ShuffleDeckReducer,
    DrawDeckReducer,
    GameReducer
});

export default rootReducer;