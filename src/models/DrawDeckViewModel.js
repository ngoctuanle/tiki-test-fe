import {TKTESTBoolValue, TKTESTStringValue} from "./TKTESTValidation";
import CardViewModel from "./CardViewModel";

class DrawDeckViewModel {
    deck_id: string = '';
    success: boolean = true;
    cards: CardViewModel[] = [];
    remaining: number;

    constructor(id, data) {
        this.deck_id = TKTESTStringValue(id);
        this.success = TKTESTBoolValue(data.success);
        this.cards = (data.cards || []).map(card => new CardViewModel(card));
        this.remaining = TKTESTBoolValue(data.remaining);
    }
}

export default DrawDeckViewModel;