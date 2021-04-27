import Renderer from 'services/Renderer';
import { TCoords } from 'services/Renderer/types';
import { DirectionToImage } from 'services/BeatItemRenderer/consts';

class BeatItemRenderer extends Renderer {
    private direction: string;

    private image: null | CanvasImageSource = null;

    constructor(canvas: HTMLCanvasElement, direction: string) {
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
        if (this.image) {
            this.ctx.drawImage(this.image, coords.x, coords.y);
        }
    }
}

export default BeatItemRenderer;
