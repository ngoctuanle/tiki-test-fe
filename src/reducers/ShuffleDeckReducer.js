import { SHUFFLE_DECK_REQUEST, SHUFFLE_DECK_SUCCESS, REQUEST_FAIL } from '../constants';

const initialState = {
    deck: {},
    waiting: true
};

const ShuffleDeckReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHUFFLE_DECK_REQUEST:
            return {
                ...state,
                waiting: true
            };
        case SHUFFLE_DECK_SUCCESS:
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

export default ShuffleDeckReducer;