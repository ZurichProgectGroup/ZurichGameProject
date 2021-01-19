import { IBoardCtx } from 'Configs/BoardConfig/IBoardConfig';
import { ILevelCtx } from 'Configs/LevelConfig/ILevelConfig';
import { IGameEntitity } from './IGameService';

export const ELEMENT_SIZE = 20;
export const FINAL_LINE_HEIGHT = ELEMENT_SIZE;
export const LATENCY_FAIL_SAFE = 10;
export const getContext = (canvas: HTMLCanvasElement) => canvas.getContext('2d');

export const clearCanvas = (canvas: HTMLCanvasElement) => {
    const ctx = getContext(canvas);
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
};

export const drawBoardLine = (
    canvas: HTMLCanvasElement,
    x: number,
    height: number,
) => {
    const ctx = getContext(canvas)!;
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
    ctx.closePath();
};

export const drawFinalLine = (canvas: HTMLCanvasElement) => {
    const ctx = getContext(canvas)!;
    ctx.fillStyle = 'purple';
    ctx.fillRect(
        0,
        canvas.height - FINAL_LINE_HEIGHT,
        canvas.width,
        FINAL_LINE_HEIGHT,
    );
    ctx.fill();
};

export const getEementOffset = (
    canvas: HTMLCanvasElement,
    board: IBoardCtx,
    position: number,
): number => {
    const percentage = 100 / board.length / 100;
    const offset = canvas.width * 0.1;
    return canvas.width * position * percentage + offset;
};

export const drawBoard = (canvas: HTMLCanvasElement, board: IBoardCtx) => {
    for (let i = 0; i < board.length; i += 1) {
        drawBoardLine(canvas, getEementOffset(canvas, board, i), canvas.height);
    }
    drawFinalLine(canvas);
};

export const drawEntitity = (
    canvas: HTMLCanvasElement,
    entity: IGameEntitity,
    level: ILevelCtx,
) => {
    const ctx = getContext(canvas)!;
    const entitityBoardKey = level.board.find((key) => key.id === entity.keyId)!;
    const x = getEementOffset(canvas, level.board, entitityBoardKey.id);
    const y = canvas.height - canvas.height * (entity.difference / level.speed);
    ctx.fillStyle = entitityBoardKey.color;
    ctx.fillRect(x - ELEMENT_SIZE / 2, y, ELEMENT_SIZE, ELEMENT_SIZE);
    ctx.fill();
};

export const drawEntitities = (
    canvas: HTMLCanvasElement,
    level: ILevelCtx,
    entities: IGameEntitity[],
) => {
    entities.forEach((entity) => {
        if (entity.visible && entity.accessible) {
            drawEntitity(canvas, entity, level);
        }
    });
};

export const isOnFinishLine = (
    entity: IGameEntitity,
    canvas: HTMLCanvasElement,
    speed:number,
) => {
    const position = canvas.height - canvas.height * (entity.difference / speed);

    return (
        position <= canvas.height + LATENCY_FAIL_SAFE
    && position >= canvas.height - FINAL_LINE_HEIGHT - LATENCY_FAIL_SAFE
    );
};

export default getContext;
