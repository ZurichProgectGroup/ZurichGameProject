import { getConfigForLevel } from 'Configs/LevelConfig/LevelConfig';
import { IBoardCtx } from 'Configs/BoardConfig/IBoardConfig';
import { INoteCtx } from 'Configs/SongConfig/ISongConfig';
import { ILevelCtx } from 'Configs/LevelConfig/ILevelConfig';
import { IGameEntitity } from './IGameService';

const ELEMENT_SIZE = 20;
const FINAL_LINE_HEIGHT = ELEMENT_SIZE;
const LATENCY_FAIL_SAFE = 10;

class GameService {
  // TODO - load user level via api
  private level: number = 1;

  private levelConfig: ILevelCtx;

  private then: any;

  private canvas: any;

  private entities: IGameEntitity[];

  private interval: number;

  private correct: any;

  private errors: any;

  private missed: any;

  private requestId: any;

  private board: IBoardCtx;

  private _start: any;

  private keyListener;

  start(canvas: HTMLCanvasElement) {
    this.levelConfig = getConfigForLevel(this.level);
    this.board = this.levelConfig.board;
    this.then = Date.now();
    this.canvas = canvas;
    this.interval = 1000 / 60; // 60fps
    this.requestId = undefined;
    this.errors = 0;
    this.correct = 0;
    this.missed = 0;
    this._start = Date.now(); // todo: link to song time

    this.entities = this.levelConfig.song.notes
      .sort((note1, note2) => note1.time - note2.time)
      .map((note: INoteCtx, index) => Object.assign(note, {
              visible: false,
              difference: null,
              accessible: true,
              failed: false,
          }));

    this.keyListener = document.addEventListener('keydown', (event) => {
      const { keyCode } = event;
      const keyId = this.board.find((key) => key.keyCode === keyCode).id;
      if (keyId !== undefined) {
        const note = this.entities.find(
          note => note.visible && note.keyId == keyId && note.accessible,
        );
        if (note && isOnFinishLine(note, canvas, this.levelConfig.speed)) {
          this.correct++;
          note.accessible = false;
          console.log('correct!');
        } else {
          this.errors++;
          console.log('error!');
        }
      }
    });

    this.loop();
  }

  draw() {
    const now = Date.now();
    const delta = now - this.then;
    if (delta > this.interval) {
      this.then = now - (delta % this.interval);
      clearCanvas(this.canvas);
      drawBoard(this.canvas, this.board);
      this.entities = this.updateEntities(now - this._start);
      drawEntitities(this.canvas, this.levelConfig, this.entities);
    }
  }

  updateEntities(milisecondsSinceStart) {
    return this.entities.filter((entity) => {
      const difference = entity.time - milisecondsSinceStart / 1000;
      if (difference > 0 && difference < this.levelConfig.speed) {
        entity.difference = difference;
        entity.visible = true;
        return true;
      }
      if (difference <= -0.1) {
        if (entity.visible === true && entity.accessible === true) {
          entity.visible = false;
          this.missed++;
          console.log('missed!');
        }
        return false;
      }
      return true;
    });
  }

  loop() {
    if (this.entities.length === 0) {
      this.stop();
      return;
    }
    this.requestId = requestAnimationFrame(this.loop.bind(this));
    this.draw();
  }

  stop() {
    cancelAnimationFrame(this.requestId);
    this.requestId = undefined;
    document.removeEventListener('keydown', this.keyListener);
    console.log(
      `Game Completed: correct = ${this.correct}, errors = ${this.errors}, missed = ${this.missed}`,
    );
  }
}

const clearCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = getContext(canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const drawBoard = (canvas: HTMLCanvasElement, board: IBoardCtx) => {
  for (let i = 0; i < board.length; i++) {
    drawBoardLine(canvas, getEementOffset(canvas, board, i), canvas.height);
  }
  drawFinalLine(canvas);
};

const getEementOffset = (
  canvas: HTMLCanvasElement,
  board: IBoardCtx,
  position: number,
): number => {
  const percentage = 100 / board.length / 100;
  const offset = canvas.width * 0.1;
  return canvas.width * position * percentage + offset;
};
const drawBoardLine = (
  canvas: HTMLCanvasElement,
  x: number,
  height: number,
) => {
  const ctx = getContext(canvas);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';

  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, height);
  ctx.stroke();
  ctx.closePath();
};

const drawFinalLine = (canvas: HTMLCanvasElement) => {
  const ctx = getContext(canvas);
  ctx.fillStyle = 'purple';
  ctx.fillRect(
    0,
    canvas.height - FINAL_LINE_HEIGHT,
    canvas.width,
    FINAL_LINE_HEIGHT,
  );
  ctx.fill();
};

const drawEntitities = (
  canvas: HTMLCanvasElement,
  level: ILevelCtx,
  entities: IGameEntitity[],
) => {
  entities.forEach((entity) => {
    if (entity.visible && entity.accessible) {
      drawEntitity(canvas, entity, level);
    }
  });
};

const drawEntitity = (
  canvas: HTMLCanvasElement,
  entity: IGameEntitity,
  level: ILevelCtx,
) => {
  const ctx = getContext(canvas);
  const entitityBoardKey = level.board.find((key) => key.id === entity.keyId);
  const x = getEementOffset(canvas, level.board, entitityBoardKey.id);
  const y = canvas.height - canvas.height * (entity.difference / level.speed);
  console.log(entity.difference);
  ctx.fillStyle = entitityBoardKey.color;
  ctx.fillRect(x - ELEMENT_SIZE / 2, y, ELEMENT_SIZE, ELEMENT_SIZE);
  ctx.fill();
};

const getContext = (canvas: HTMLCanvasElement) => canvas.getContext('2d');

const isOnFinishLine = (
  entity: IGameEntitity,
  canvas: HTMLCanvasElement,
  speed,
) => {
  let position = canvas.height - canvas.height * (entity.difference / speed);
  console.log(
    "isOnFinishLine",
    entity.difference * canvas.height,
    canvas.height,
  );
  return (
    position <= canvas.height + LATENCY_FAIL_SAFE
    && position >= canvas.height - FINAL_LINE_HEIGHT - LATENCY_FAIL_SAFE
  );
};
export const gameService = new GameService();
