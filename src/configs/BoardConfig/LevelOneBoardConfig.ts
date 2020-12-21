import {IBoardCtx} from "./IBoardConfig"

const ARROW_LEFT_KEY_CODE = 37;
const ARROW_RIGHT_KEY_CODE = 39;

export default levelOneBoardConfig: IBoardCtx[] = [
  {
    id: 1,
    key: ARROW_LEFT_KEY_CODE,
    color: "yellow"
  },
  {
    id: 2,
    key: ARROW_RIGHT_KEY_CODE,
    color: "blue"
  }
];
