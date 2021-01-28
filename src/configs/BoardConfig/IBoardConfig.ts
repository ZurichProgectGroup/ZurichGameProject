export interface IKeyCtx {
    id: number;
    keyCode: number;
    direction: string;
}

export type IBoardCtx = IKeyCtx[];
