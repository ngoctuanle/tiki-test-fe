import DeckViewModel from "../models/DeckViewModel";
import DrawDeckViewModel from "../models/DrawDeckViewModel";
import { CARDS_NUM } from '../constants';

export function getNewDeck() {
    return new Promise(async resolve => {
        const deckResponse = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const deckData = await deckResponse.json();
        resolve(new DeckViewModel(deckData.deck_id, deckData));
    });
}

export function shuffleDeck(deckId) {
    return new Promise(async resolve => {
        const deckResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
        const deckData = await deckResponse.json();
        resolve(new DeckViewModel(deckData.deck_id, deckData));
    });
}

export function drawDeck(deckId) {
    return new Promise(async resolve => {
        const deckResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${CARDS_NUM}`);
        const deckData = await deckResponse.json();
        resolve(new DrawDeckViewModel(deckData.deck_id, deckData));
    });
}