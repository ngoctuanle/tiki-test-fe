import {
    GAME_NEXT_ROUND,
    GAME_RESET_ROUND,
    GAME_SET_SCORE,
    GAME_SET_DECK,
    GAME_REVEAL_CARD
} from '../constants';

const initialState = {
    round_no: 0,
    players_win: [],
    players_score: {},
    players_deck: {},
    revealed: false
};

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_NEXT_ROUND:
            return {
                ...state,
                revealed: false,
                players_deck: {},
                players_win: [],
                round_no: state.round_no + 1
            };
        case GAME_RESET_ROUND:
            return {
                ...state,
                revealed: false,
                players_score: {},
                players_deck: {},
                players_win: [],
                round_no: 0
            };
        case GAME_SET_SCORE:
            if (!state.players_score[action.payload.player_no]) state.players_score[action.payload.player_no] = 0;
            state.players_score[action.payload.player_no] += action.payload.score;
            return {
                ...state,
                revealed: false,
                players_score: state.players_score
            };
        case GAME_SET_DECK:
            if (!state.players_deck[action.payload.player_no]) state.players_deck[action.payload.player_no] = {};
            state.players_deck[action.payload.player_no] = action.payload.deck;
            return {
                ...state,
                revealed: false,
                players_deck: state.players_deck
            };
        case GAME_REVEAL_CARD:
            return {
                ...state,
                players_win: action.payload.players_win,
                revealed: true
            };
        default:
            return state;
    }
};

export default GameReducer;