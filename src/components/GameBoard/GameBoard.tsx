import React, { useCallback } from 'react';
import './GameBoard.css';
import LinkButton from 'Components/LinkButton';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';
import type { Props } from './types';

const GameBoard = ({ onComplete, onError }: Props) => {
    const handlePause = useCallback(() => {}, []);

    return (
        <div className="game">
            <div className="game__header">
                <LinkButton className="game__pause" onClick={handlePause} isButton>
                    Pause
                </LinkButton>
                <ScoreBoard />
            </div>
            <Board onComplete={onComplete} onError={onError} />
        </div>
    );
};

export default GameBoard;
