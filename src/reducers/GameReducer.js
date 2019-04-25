import { GAME_NEXT_ROUND, GAME_RESET_ROUND, GAME_SET_SCORE } from '../constants';

const initialState = {
    round_no: 0,
    players: {},
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
        case GAME_SET_SCORE:
            if (!state.players[action.player_no]) state.players[action.player_no] = 0;
            state.players[action.player_no] += action.score;
            return {
                ...state,
                players: state.players
            };
        default:
            return state;
    }
};

export default GameReducer;