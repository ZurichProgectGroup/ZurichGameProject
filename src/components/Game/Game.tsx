import React, { useState, useCallback } from 'react';
import GameStart from 'Components/GameStart';
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

    /* todo const onError = useCallback(() => {
        setGameState(GameState.error);
    }, [gameState]); */
    let result;
    switch (gameState) {
        case GameState.board:
            result = (<GameBoard onComplete={onComplete} />);
            break;
        case GameState.complete:
        // заглушка
            result = (<GameStart onComplete={onStart} />);
            break;
        case GameState.error:
        // заглушка
            result = (<GameStart onComplete={onStart} />);
            break;
        default:
            result = (<GameStart onComplete={onStart} />);
    }

    return result;
};

export default Game;
