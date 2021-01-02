import { IBoardCtx } from './IBoardConfig';

const ARROW_LEFT_KEY_CODE = 37;
const ARROW_RIGHT_KEY_CODE = 39;

const levelOneBoardConfig: IBoardCtx = [
    {
        id: 0,
        keyCode: ARROW_LEFT_KEY_CODE,
        color: 'yellow',
    },
    {
        id: 1,
        keyCode: ARROW_RIGHT_KEY_CODE,
        color: 'blue',
    },
];

export default levelOneBoardConfig;
