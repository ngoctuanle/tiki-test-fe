import {TKTESTStringValue} from "./TKTESTValidation";

class ImageViewModel {
    png: string = '';
    svg: string = '';

    constructor(data) {
        this.png = TKTESTStringValue(data.png);
        this.svg = TKTESTStringValue(data.svg);
    }
}

export default ImageViewModel;