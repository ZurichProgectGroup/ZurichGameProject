import {INoteCtx} from "Configs/SongConfig/ISongConfig";

export interface IGameEntitity extends INoteCtx {
  visible:boolean;
  difference:number;
  accessible:boolean;
  failed:boolean;
}
