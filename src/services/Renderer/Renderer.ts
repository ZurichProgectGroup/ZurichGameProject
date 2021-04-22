import type { TCoords } from './types';

class Renderer {
    protected canvas: HTMLCanvasElement | null ;

    protected ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.initCanvasSize();
    }

    protected initCanvasSize() {
        const { canvas } = this;
        const width = canvas?.clientWidth;
        const height = canvas?.clientHeight;

        if (canvas && width && height) {
            if (canvas.width !== width || canvas.height !== height) {
                // eslint-disable-next-line no-param-reassign
                canvas.width = width;
                // eslint-disable-next-line no-param-reassign
                canvas.height = height;
            }
        }
    }

    protected drawLine(start : TCoords,
        end: TCoords,
        width: number,
        color: string | CanvasGradient | CanvasPattern) {
        const { ctx } = this;
        ctx.lineWidth = width;
        ctx.strokeStyle = color;

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    }

    protected setShadow(color: string, blur: number) {
        this.ctx.shadowColor = color;
        this.ctx.shadowBlur = blur;
    }

    protected clearShadow() {
        this.ctx.shadowColor = 'transparent';
    }

    public getCanvas() {
        return this.canvas;
    }
}

export default Renderer;
