import {TKTESTBoolValue, TKTESTNumberValue, TKTESTStringValue} from "./TKTESTValidation";

class DeckViewModel {
    deck_id: string = '';
    success: boolean = true;
    shuffled: boolean = true;
    remaining: number = 52;

    constructor(id, data) {
        this.deck_id = TKTESTStringValue(id);
        this.success = TKTESTBoolValue(data.success);
        this.shuffled = TKTESTBoolValue(data.shuffled);
        this.remaining = TKTESTNumberValue(data.remaining);
    }
}

export default DeckViewModel;