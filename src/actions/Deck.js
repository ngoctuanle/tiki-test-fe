import {
    DRAW_DECK_REQUEST,
    DRAW_DECK_SUCCESS,
    GET_NEW_DECK_REQUEST,
    GET_NEW_DECK_SUCCESS,
    SHUFFLE_DECK_REQUEST,
    SHUFFLE_DECK_SUCCESS
} from "../constants";

export const getDeckRequest = (payload) => ({
    type: GET_NEW_DECK_REQUEST,
    payload
});

export const getDeckSuccess = (payload) => ({
    type: GET_NEW_DECK_SUCCESS,
    payload
});

export const shuffleDeckRequest = (payload) => ({
    type: SHUFFLE_DECK_REQUEST,
    payload
});

export const shuffleDeckSuccess = (payload) => ({
    type: SHUFFLE_DECK_SUCCESS,
    payload
});

export const drawDeckRequest = (payload) => ({
    type: DRAW_DECK_REQUEST,
    payload
});

export const drawDeckSuccess = (payload) => ({
    type: DRAW_DECK_SUCCESS,
    payload
});