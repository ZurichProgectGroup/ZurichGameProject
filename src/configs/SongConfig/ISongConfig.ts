export interface INoteCtx {
    keyId: number;
    time: number;
}

export interface ISongCtx {
    path: string;
    notes: INoteCtx[];
}
