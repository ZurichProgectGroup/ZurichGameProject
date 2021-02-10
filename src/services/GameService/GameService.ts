import getConfigForLevel from 'Configs/LevelConfig/LevelConfig';
import { IBoardCtx } from 'Configs/BoardConfig/IBoardConfig';
import { INoteCtx } from 'Configs/SongConfig/ISongConfig';
import { ILevelCtx } from 'Configs/LevelConfig/ILevelConfig';
import { Directions } from 'Services/BeatItemRenderer/consts';
import BeatItemRenderer from 'Services/BeatItemRenderer';
import BoardRenderer from 'Services/BoardRenderer';
import { IGameEntitity } from './IGameService';
import {
    isOnFinishLine,
    clearCanvas,
    drawEntitities,
} from './GameServiceUtils';

class GameService {
    // TODO - load user level via api
    private level: number = 1;

    private levelConfig?: ILevelCtx;

    private then: number = 0;

    private canvas?: HTMLCanvasElement;

    private entities: IGameEntitity[] = [];

    private interval: number = 0 ;

    private correct: number = 0;

    // private errors: number = 0;
    // private missed: number = 0;
    private requestId: number = 0;

    private board?: IBoardCtx;

    private startTime?: number; // todo - убрать!привязать к аудио

    private keyListener?: (event: KeyboardEvent) => void;

    private onComplete!: () => void;

    private onError!: () => void;

    private beatItems: {[key: string] : BeatItemRenderer};

    private boardElement: BoardRenderer;

    private audio: HTMLAudioElement;

    async start(
        canvas: HTMLCanvasElement,
        onComplete:()=>void,
        onError:()=>void,
        onHit: () => void,
    ) {
        this.levelConfig = getConfigForLevel(this.level);
        this.audio = new Audio(this.levelConfig.song.path);
        this.board = this.levelConfig.board;
        this.then = Date.now();
        this.canvas = canvas;
        this.interval = 1000 / 60; // 60fps
        this.requestId = 0;
        this.correct = 0;
        this.startTime = Date.now(); // todo: link to song time
        this.onComplete = onComplete;
        this.onError = onError;

        this.beatItems = {
            [Directions.left]: new BeatItemRenderer(canvas, Directions.left),
            [Directions.right]: new BeatItemRenderer(canvas, Directions.right),
            [Directions.up]: new BeatItemRenderer(canvas, Directions.up),
            [Directions.down]: new BeatItemRenderer(canvas, Directions.down),
        };

        this.boardElement = new BoardRenderer(canvas);

        this.entities = this.levelConfig.song.notes
            .sort((note1, note2) => note1.time - note2.time)
            .map((note: INoteCtx) => Object.assign(note, {
                visible: false,
                difference: null,
                accessible: true,
                failed: false,
            })) as unknown as IGameEntitity[];

        this.keyListener = (event: KeyboardEvent) => {
            const { keyCode } = event;
            const keyId = this.board?.find((key) => key.keyCode === keyCode)?.id;
            if (keyId !== undefined) {
                const note = this.entities.find(
                    (currentNote) => currentNote.visible
                                     && currentNote.keyId === keyId
                                     && currentNote.accessible,
                );
                if (note && isOnFinishLine(note, canvas, this.levelConfig?.speed ?? 0)) {
                    this.correct += 1;
                    onHit();
                    note.accessible = false;
                } else {
                    // this.errors += 1;
                    console.log('error!');
                }
            }
        };
        document.addEventListener('keydown', this.keyListener);

        await this.playMusic();
        this.loop();
    }

    playMusic() {
        return this.audio.play();
    }

    draw() {
        const now = Date.now();
        const delta = now - this.then;
        if (delta > this.interval) {
            this.then = now - (delta % this.interval);
            clearCanvas(this.canvas);
            this.boardElement.render();
            this.entities = this.updateEntities(now - this.startTime!);
            drawEntitities(this.boardElement, this.levelConfig!, this.entities, this.beatItems);
        }
    }

    updateEntities(milisecondsSinceStart:number):IGameEntitity[] {
        return this.entities.filter((entity) => {
            const difference = entity.time - milisecondsSinceStart / 1000;
            if (difference > 0 && difference < this.levelConfig!.speed) {
                /* eslint-disable no-param-reassign */
                entity.difference = difference;
                /* eslint-disable no-param-reassign */
                entity.visible = true;
                return true;
            }
            if (difference <= -0.1) {
                if (entity.visible && entity.accessible) {
                    // entity.visible = false;
                    // this.missed += 1;
                    console.log('missed!');
                }
                return false;
            }
            return true;
        });
    }

    loop() {
        if (this.entities.length === 0) {
            setTimeout(() => { this.stop(); }, 2000);
            return;
        }

        this.requestId = requestAnimationFrame(this.loop.bind(this));
        this.draw();
    }

    stop() {
        this.audio.pause();
        cancelAnimationFrame(this.requestId);
        if (this.correct >= this.levelConfig!.minimumPoints) {
            this.onComplete();
        } else {
            this.onError();
        }
    }
}

export default new GameService();
