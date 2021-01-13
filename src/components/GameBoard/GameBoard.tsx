import React, { createRef, useEffect } from 'react';
import './GameBoard.css';
import gameService from '../../services/GameService';
import type { Props } from './types';

const GameBoard = (props: Props) => {
    const canvas = createRef<HTMLCanvasElement>();
    const {
        onComplete,
    } = props;

    useEffect(() => {
        gameService.start(canvas.current!);
        return () => {
            gameService.stop();
            onComplete();
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
