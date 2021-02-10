import React, { createRef, useEffect } from 'react';
import './GameBoard.css';
import gameService from '../../services/GameService';
import type { Props } from './types';

const GameBoard = ({ onComplete, onError }: Props) => {
    const canvas = createRef<HTMLCanvasElement>();

    useEffect(() => {
        gameService.start(canvas!.current!, onComplete, onError);
        return () => {
            gameService.stop();
        };
    });

    return (
        <div className="game">
            <div className="game__header">
                <span className="game__score">{0}</span>
            </div>
            <canvas className="game__board" ref={canvas} />
        </div>
    );
};

export default GameBoard;
