export interface IStoreCTX {
    account:{
        user: User | null
    },
    game: {
        currentScore: number
    },
}
