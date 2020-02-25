export type NewPlayerDump = {
    playerKeys: Array<string>,
    playerLocalIndexes: Array<number>,
    playerGlobalIndexes: Array<number>
    location: {
        localIndex: number,
        globalIndex: number
    }
}
