import React, { createRef, useCallback, useEffect } from 'react';
import './GameBoard.css';
import LinkButton from 'Components/LinkButton';
import gameService from '../../services/GameService';
import type { Props } from './types';

const GameBoard = ({ onComplete, onError }: Props) => {
    const canvas = createRef<HTMLCanvasElement>();
    const handlePauseClick = useCallback(() => {}, []);

    useEffect(() => {
        gameService.start(canvas!.current!, onComplete, onError);
        return () => {
            gameService.stop();
        };
    });

    return (
        <div className="game">
            <div className="game__header">
                <LinkButton className="game__pause" isButton onClick={handlePauseClick}>
                    Pause
                </LinkButton>
                <span className="game__score">{0}</span>
            </div>
            <canvas className="game__board" ref={canvas} />
        </div>
    );
};

export default GameBoard;
