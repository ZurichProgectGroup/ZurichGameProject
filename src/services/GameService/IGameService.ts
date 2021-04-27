import { INoteCtx } from 'configs/SongConfig/ISongConfig';

export interface IGameEntitity extends INoteCtx {
    visible: boolean;
    difference: number;
    accessible: boolean;
    failed: boolean;
}
