import { Directions } from 'services/BeatItemRenderer/consts';
import { IBoardCtx } from './IBoardConfig';

const ARROW_LEFT_KEY_CODE = 37;
const ARROW_UP_KEY_CODE = 38;
const ARROW_DOWN_KEY_CODE = 40;
const ARROW_RIGHT_KEY_CODE = 39;

const levelOneBoardConfig: IBoardCtx = [
    {
        id: 1,
        keyCode: ARROW_LEFT_KEY_CODE,
        direction: Directions.left,
    },
    {
        id: 2,
        keyCode: ARROW_RIGHT_KEY_CODE,
        direction: Directions.right,
    },
    {
        id: 3,
        keyCode: ARROW_UP_KEY_CODE,
        direction: Directions.up,
    },
    {
        id: 4,
        keyCode: ARROW_DOWN_KEY_CODE,
        direction: Directions.down,
    },
];

export default levelOneBoardConfig;
