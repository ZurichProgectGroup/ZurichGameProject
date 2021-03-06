import React, { useState, useCallback } from 'react';
import GameStart from 'Components/GameStart';
import GameComplete from 'Components/GameComplete';
import GameBoard from 'Components/GameBoard';
import GameState from './types';

const Game = () => {
    const [gameState, setGameState] = useState(GameState.start);

    const onStart = useCallback(() => {
        setGameState(GameState.board);
    }, []);

    const onComplete = useCallback(() => {
        setGameState(GameState.complete);
    }, []);

    const onError = useCallback(() => {
        setGameState(GameState.error);
    }, []);

    let result;
    switch (gameState) {
        case GameState.board:
            result = (<GameBoard onComplete={onComplete} onError={onError} />);
            break;
        case GameState.complete:
            result = (<GameComplete onComplete={onStart} success />);
            break;
        case GameState.error:
            result = (<GameComplete onComplete={onStart} success={false} />);
            break;
        default:
            result = (<GameStart onComplete={onStart} />);
    }

    return result;
};

export default Game;
