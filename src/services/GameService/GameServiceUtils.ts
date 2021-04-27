import { ILevelCtx } from 'configs/LevelConfig/ILevelConfig';
import BeatItemRenderer from 'services/BeatItemRenderer';
import BoardRenderer from 'services/BoardRenderer';
import { ColumnsOrder } from 'services/BeatItemRenderer/consts';
import { ACTION_LINE_HEIGHT, ITEM_WIDTH } from 'services/BoardRenderer/consts';
import { IGameEntitity } from './IGameService';

export const getContext = (canvas: HTMLCanvasElement) => canvas.getContext('2d');

export const clearCanvas = (canvas: HTMLCanvasElement) => {
    const ctx = getContext(canvas);
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
};

export const drawEntitity = (
    board: BoardRenderer,
    entity: IGameEntitity,
    level: ILevelCtx,
    beatItems: {[key: string] : BeatItemRenderer},
) => {
    const entitityBoardKey = level.board.find((key) => key.id === entity.keyId)!;
    const canvas = board.getCanvas();
    const y = canvas.height - canvas.height * (entity.difference / level.speed);
    const beatItem = beatItems[entitityBoardKey.direction];
    board.renderItem(beatItem, ColumnsOrder.indexOf(entitityBoardKey.direction) + 1, y);
};

export const drawEntitities = (
    board: BoardRenderer,
    level: ILevelCtx,
    entities: IGameEntitity[],
    beatItems: {[key: string] : BeatItemRenderer},
) => {
    entities.forEach((entity) => {
        if (entity.visible && entity.accessible) {
            drawEntitity(board, entity, level, beatItems);
        }
    });
};

export const isOnFinishLine = (
    entity: IGameEntitity,
    canvas: HTMLCanvasElement,
    speed:number,
) => {
    const position = canvas.height - canvas.height * (entity.difference / speed);
    const actionLineStart = canvas.height - ACTION_LINE_HEIGHT - 100;
    return (
        position <= actionLineStart + ACTION_LINE_HEIGHT
        && position >= actionLineStart - ITEM_WIDTH / 2
    );
};

export default getContext;
