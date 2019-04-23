import {TKTESTStringValue} from "./TKTESTValidation";
import ImageViewModel from "./ImageViewModel";

class CardViewModel {
    suit: string = '';
    code: string = '';
    value: string = '';
    images: ImageViewModel | {} = {};
    image: string = '';

    constructor(data) {
        this.suit = TKTESTStringValue(data.suit);
        this.code = TKTESTStringValue(data.code);
        this.value = TKTESTStringValue(data.value);
        this.images = new ImageViewModel(data.images || {});
        this.image = TKTESTStringValue(data.image);
    }
}

export default CardViewModel;