import React, { useState, useCallback } from 'react';
import GameStart from 'components/GameStart';
import GameComplete from 'components/GameComplete';
import GameBoard from 'components/GameBoard';
import GameService from 'services/GameService';
import GameState from './types';

const Game = () => {
    const [gameState, setGameState] = useState(GameState.start);

    const onStart = useCallback(() => {
        GameService.init();
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
