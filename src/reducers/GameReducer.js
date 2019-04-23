import { GAME_NEXT_ROUND, GAME_RESET_ROUND } from '../constants';

const initialState = {
    round_no: 0,
    waiting: true
};

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_NEXT_ROUND:
            return {
                ...state,
                round_no: state.round_no++
            };
        case GAME_RESET_ROUND:
            return {
                ...state,
                round_no: 0
            };
        default:
            return state;
    }
};

export default GameReducer;