import levelOneSongConfig from 'configs/SongConfig/LevelOneSongConfig';
import levelOneBoardConfig from 'configs/BoardConfig/LevelOneBoardConfig';

const getConfigForLevel = (level: number) => {
    switch (level) {
    // TODO add levels
        default:
            return {
                song: levelOneSongConfig,
                board: levelOneBoardConfig,
                minimumPoints: 4,
                speed: 5,
            };
    }
};

export default getConfigForLevel;
