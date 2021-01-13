import React, { createRef, useEffect } from 'react';
import css from './GameBoard.css';
import gameService from '../../services/GameService';
import type { Props } from './types';

const GameBoard = ({onComplete, onError}: Props) => {
    const canvas = createRef<HTMLCanvasElement>();

    useEffect(() => {
        gameService.start(canvas.current, onComplete, onError);
        return () => {
            gameService.stop();
        };
    });

    return (
        <div className="game">
            <canvas className="canvas" ref={canvas} />
            <div className="correct">
                Correct:
                <span>0</span>
            </div>
            <div className="errors">
                Error:
                <span>0</span>
            </div>
            <div className="missed">
                Missed:
                <span>0</span>
            </div>
        </div>
    );
};

export default GameBoard;
