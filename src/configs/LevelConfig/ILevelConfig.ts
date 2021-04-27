import { ISongCtx } from 'configs/SongConfig/ISongConfig';
import { IBoardCtx } from 'configs/BoardConfig/IBoardConfig';

export interface ILevelCtx {
    song: ISongCtx;
    board: IBoardCtx;
    minimumPoints: number;
    speed: number;
}
