import {
    GET_NEW_DECK_REQUEST,
    GET_NEW_DECK_SUCCESS,
    SHUFFLE_DECK_REQUEST,
    SHUFFLE_DECK_SUCCESS,
    DRAW_DECK_REQUEST,
    DRAW_DECK_SUCCESS,
    REQUEST_FAIL,
} from '../constants';

const initialState = {
    deck: {},
    waiting: true
};

const DeckReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_DECK_REQUEST:
            return {
                ...state,
                waiting: true
            };
        case GET_NEW_DECK_SUCCESS:
            return  {
                ...state,
                deck: action.payload.deck,
                waiting: false
            };
        case SHUFFLE_DECK_REQUEST:
            return {
                ...state,
                waiting: true
            };
        case SHUFFLE_DECK_SUCCESS:
            return  {
                ...state,
                waiting: false
            };
        case DRAW_DECK_REQUEST:
            return {
                ...state,
                waiting: true
            };
        case DRAW_DECK_SUCCESS:
            return  {
                ...state,
                deck: action.payload.deck,
                waiting: false
            };
        case REQUEST_FAIL:
            return {
                ...state,
                waiting: false
            };
        default:
            return state;
    }
};

export default DeckReducer;