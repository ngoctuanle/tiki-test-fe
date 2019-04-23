import { GET_NEW_DECK_REQUEST, GET_NEW_DECK_SUCCESS } from '../constants/Actions';

export const getDeckRequest = (payload) => ({
    type: GET_NEW_DECK_REQUEST,
    payload
});

export const getDeckSuccess = (payload) => ({
    type: GET_NEW_DECK_SUCCESS,
    payload
});