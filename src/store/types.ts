import { StringKeyString } from 'Utils/custom_types';

export interface IStoreCTX {
    account:{
        user: StringKeyString
    },
    game: {
        currentScore: number
    },
}
