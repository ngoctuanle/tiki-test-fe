import { GET_NEW_DECK_REQUEST, GET_NEW_DECK_SUCCESS, REQUEST_FAIL } from '../constants';

const initialState = {
    deck: {},
    waiting: true
};

const GetDeckReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_DECK_REQUEST:
            return {
              ...state,
              waiting: true
            };
        case GET_NEW_DECK_SUCCESS:
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

export default GetDeckReducer;