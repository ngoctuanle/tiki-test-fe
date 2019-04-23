import { SHUFFLE_DECK_REQUEST, SHUFFLE_DECK_SUCCESS } from '../constants/Actions';

export const shuffleDeckRequest = (payload) => ({
    type: SHUFFLE_DECK_REQUEST,
    payload
});

export const shuffleDeckSuccess = (payload) => ({
    type: SHUFFLE_DECK_SUCCESS,
    payload
});