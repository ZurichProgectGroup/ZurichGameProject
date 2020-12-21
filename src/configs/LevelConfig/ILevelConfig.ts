import {ISongCtx} from "Configs/SongConfig/ISongCtx"
import {IBoardCtx} from "Configs/BoardConfig/IBoardCtx"

export interface ILevelCtx {
  song: ISongCtx,
  board: IBoardCtx,
  minimumPoints: number
}
