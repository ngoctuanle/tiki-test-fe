import { DRAW_DECK_REQUEST, DRAW_DECK_SUCESS } from '../constants/Actions';

export const drawDeckRequest = (payload) => ({
    type: DRAW_DECK_REQUEST,
    payload
});

export const drawDeckSuccess = (payload) => ({
    type: DRAW_DECK_SUCESS
});