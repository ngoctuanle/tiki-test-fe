import { SHUFFLE_DECK_REQUEST, SHUFFLE_DECK_SUCESS } from '../constants/Actions';

export const shuffleDeckRequest = (payload) => ({
    type: SHUFFLE_DECK_REQUEST,
    payload
});

export const shuffleDeckSuccess = (payload) => ({
    type: SHUFFLE_DECK_SUCESS,
    payload
});