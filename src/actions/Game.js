import {
    GAME_NEXT_ROUND,
    GAME_RESET_ROUND,
    GAME_SET_SCORE,
    GAME_SET_DECK
} from "../constants";

export const gameNextRound = (payload) => ({
    type: GAME_NEXT_ROUND,
    payload
});

export const gameResetRound = (payload) => ({
    type: GAME_RESET_ROUND,
    payload
});

export const gameSetScore = (payload) => ({
    type: GAME_SET_SCORE,
    payload
});

export const gameSetDeck = (payload) => ({
    type: GAME_SET_DECK,
    payload
});