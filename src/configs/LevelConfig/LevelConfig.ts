import { levelOneSongConfig } from 'Configs/SongConfig/LevelOneSongConfig';
import { levelOneBoardConfig } from 'Configs/BoardConfig/LevelOneBoardConfig';

export const getConfigForLevel = (level:number) => {
  switch (level) {
    // TODO add levels
    default:
      return {
        song: levelOneSongConfig,
        board: levelOneBoardConfig,
        minimumPoints: 2,
        speed: 5,
      };
  }
};
