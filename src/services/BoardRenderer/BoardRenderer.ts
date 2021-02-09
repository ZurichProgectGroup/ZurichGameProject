import Renderer from 'Services/Renderer';
import BeatItemRenderer from 'Services/BeatItemRenderer';
import {
    BG_COLOR,
    BLUE_COLOR,
    BOARD_COLUMN_LINE_COLOR,
    BOARD_SHADOW_BLUR,
    BOARD_SHADOW_COLOR,
    BOARD_WIDTH,
    ACTION_LINE_HEIGHT, ACTION_LINE_WIDTH, BOARD_OFFSET, ITEM_WIDTH,
} from './consts';

class BoardRenderer extends Renderer {
    private boardStartX: number = 0;

    private columnsCount = 4;

    constructor(canvas) {
        super(canvas);
        this.boardStartX = (this.canvas.width - BOARD_WIDTH) / 2;
    }

    render() {
        const { ctx } = this;
        const startX = this.boardStartX;
        const { height } = this.canvas;
        ctx.beginPath();
        this.setShadow(BOARD_SHADOW_COLOR, BOARD_SHADOW_BLUR);
        ctx.rect(startX, 0, BOARD_WIDTH, height);
        ctx.fillStyle = BG_COLOR;
        ctx.fill();
        this.clearShadow();

        this.drawVerticalLine(startX);
        this.drawVerticalLine(startX + BOARD_WIDTH);
        this.renderColumns();
        this.renderActionLine(
            { x: startX - BOARD_OFFSET, y: height - ACTION_LINE_HEIGHT - 100 },
        );
    }

    drawVerticalLine(start, color = BLUE_COLOR) {
        const { height } = this.canvas;
        this.drawLine({ x: start, y: 0 }, { x: start, y: height }, 2, color);
    }

    renderColumns() {
        const columnWidth = BOARD_WIDTH / this.columnsCount;
        for (let i = 0; i < this.columnsCount; i += 1) {
            this.drawVerticalLine(columnWidth * i + this.boardStartX, BOARD_COLUMN_LINE_COLOR);
        }
    }

    renderActionLine(start) {
        const radius = 12;
        const { ctx } = this;
        const { x, y } = start;
        const r = x + ACTION_LINE_WIDTH;
        const b = y + ACTION_LINE_HEIGHT;

        ctx.strokeStyle = BLUE_COLOR;
        this.setShadow(BOARD_SHADOW_COLOR, BOARD_SHADOW_BLUR);
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(x + radius, y);
        ctx.lineTo(r - radius, y);
        ctx.quadraticCurveTo(r, y, r, y + radius);
        ctx.lineTo(r, y + ACTION_LINE_HEIGHT - radius);
        ctx.quadraticCurveTo(r, b, r - radius, b);
        ctx.lineTo(x + radius, b);
        this.setShadow(BOARD_COLUMN_LINE_COLOR, BOARD_SHADOW_BLUR);
        ctx.quadraticCurveTo(x, b, x, b - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.stroke();
        ctx.fill();
    }

    renderItem(item: BeatItemRenderer, column: number, yPosition: number = 0) {
        const columnWidth = BOARD_WIDTH / this.columnsCount;
        const offset = (columnWidth - ITEM_WIDTH) / 2;
        const x = (columnWidth * (column - 1)) + this.boardStartX + offset;

        item.render({ x, y: yPosition });
    }
}

export default BoardRenderer;
