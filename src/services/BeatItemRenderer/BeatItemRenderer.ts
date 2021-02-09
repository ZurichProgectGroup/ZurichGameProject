import Renderer from 'Services/Renderer';
import { TCoords } from 'Services/Renderer/types';
import { DirectionToImage } from 'Services/BeatItemRenderer/consts';

class BeatItemRenderer extends Renderer {
    private direction: string;

    private image: null | CanvasImageSource = null;

    constructor(canvas, direction: string) {
        super(canvas);
        this.direction = direction;
        this.createImage();
    }

    createImage() {
        const image = new Image();
        image.src = DirectionToImage[this.direction];

        image.onload = () => {
            this.image = image;
        };
    }

    render(coords: TCoords) {
        this.ctx.drawImage(this.image, coords.x, coords.y);
    }
}

export default BeatItemRenderer;
