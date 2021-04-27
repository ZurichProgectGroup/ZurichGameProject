import React from 'react';
import { useSelector } from 'react-redux';
import { IStoreCTX } from 'store';

const ScoreBoard = () => {
    const score = useSelector((state: IStoreCTX) => state.game.currentScore);
    return (
        <span className="game__score">{score}</span>
    );
};

export default ScoreBoard;
