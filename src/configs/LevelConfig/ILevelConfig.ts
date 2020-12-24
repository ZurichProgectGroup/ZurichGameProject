import {ISongCtx} from "Configs/SongConfig/ISongConfig"
import {IBoardCtx} from "Configs/BoardConfig/IBoardConfig"

export interface ILevelCtx {
  song: ISongCtx;
  board: IBoardCtx;
  minimumPoints: number;
  speed:number;
}
