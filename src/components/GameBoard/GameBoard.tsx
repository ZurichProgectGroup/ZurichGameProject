import React from 'react';
import './GameBoard.css';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';
import type { Props } from './types';

const GameBoard = ({ onComplete, onError }: Props) => (
    <div className="game">
        <div className="game__header">
            <ScoreBoard />
        </div>
        <Board onComplete={onComplete} onError={onError} />
    </div>
);

export default GameBoard;
