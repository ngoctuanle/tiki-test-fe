import { DRAW_DECK_REQUEST, DRAW_DECK_SUCCESS, REQUEST_FAIL } from '../constants';

const initialState = {
    deck: {},
    waiting: true
};

const DrawDeckReducer = (state = initialState, action) => {
    switch (action.type) {
        case DRAW_DECK_REQUEST:
            return {
                ...state,
                waiting: true
            };
        case DRAW_DECK_SUCCESS:
            return  {
                ...state,
                deck: action.deck,
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

export default DrawDeckReducer;