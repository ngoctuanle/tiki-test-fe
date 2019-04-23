import {TKTESTStringValue} from "./TKTESTValidation";
import CardViewModel from "./CardViewModel";
import DeckViewModel from "./DeckViewModel";

class DrawDeckViewModel extends DeckViewModel {
    cards: CardViewModel[] = [];
    error: string;

    constructor(id, data) {
        super(id, data);
        this.cards = (data.cards || []).map(card => new CardViewModel(card));
        this.error = TKTESTStringValue(data.error);
    }
}

export default DrawDeckViewModel;