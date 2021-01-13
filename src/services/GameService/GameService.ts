import getConfigForLevel from 'Configs/LevelConfig/LevelConfig';
import { IBoardCtx } from 'Configs/BoardConfig/IBoardConfig';
import { INoteCtx } from 'Configs/SongConfig/ISongConfig';
import { ILevelCtx } from 'Configs/LevelConfig/ILevelConfig';
import { IGameEntitity } from './IGameService';
import {
    isOnFinishLine,
    clearCanvas,
    drawBoard,
    drawEntitities,
} from './GameServiceUtils';

class GameService {
    // TODO - load user level via api
    private level: number = 1;

    private levelConfig: ILevelCtx;

    private then: number;

    private canvas: HTMLCanvasElement;

    private entities: IGameEntitity[];

    private interval: number;

    private correct: number;

    private errors: number;

    private missed: number;

    private requestId: number;

    private board: IBoardCtx;

    private startTime: number;// todo - убрать!привязать к аудио

    private keyListener;

    private onComplete:()=>void;

    private onError:()=>void;

    start(canvas: HTMLCanvasElement, onComplete:()=>void, onError:()=>void) {
        this.levelConfig = getConfigForLevel(this.level);
        this.board = this.levelConfig.board;
        this.then = Date.now();
        this.canvas = canvas;
        this.interval = 1000 / 60; // 60fps
        this.requestId = undefined;
        this.errors = 0;
        this.correct = 0;
        this.missed = 0;
        this.startTime = Date.now(); // todo: link to song time
        this.onComplete = onComplete;
        this.onError = onError;

        this.entities = this.levelConfig.song.notes
            .sort((note1, note2) => note1.time - note2.time)
            .map((note: INoteCtx) => Object.assign(note, {
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
                    (currentNote) => currentNote.visible
                                     && currentNote.keyId === keyId
                                     && currentNote.accessible,
                );
                if (note && isOnFinishLine(note, canvas, this.levelConfig.speed)) {
                    this.correct += 1;
                    note.accessible = false;
                    console.log('correct!');
                } else {
                    this.errors += 1;
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
            this.entities = this.updateEntities(now - this.startTime);
            drawEntitities(this.canvas, this.levelConfig, this.entities);
        }
    }

    updateEntities(milisecondsSinceStart:number):IGameEntitity[] {
        return this.entities.filter((entity) => {
            const difference = entity.time - milisecondsSinceStart / 1000;
            if (difference > 0 && difference < this.levelConfig.speed) {
                /* eslint-disable no-param-reassign */
                entity.difference = difference;
                /* eslint-disable no-param-reassign */
                entity.visible = true;
                return true;
            }
            if (difference <= -0.1) {
                if (entity.visible && entity.accessible) {
                    // entity.visible = false;
                    this.missed += 1;
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
        if (this.correct >= this.levelConfig.minimumPoints) {
            this.onComplete();
        } else {
            this.onError();
        }
    }
}

export default new GameService();
