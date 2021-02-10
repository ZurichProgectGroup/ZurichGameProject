import React, { createRef, useCallback, useEffect } from 'react';
import gameService from 'Services/GameService/GameService';
import { resetCurrentScore, addGamePoint } from 'Store/game';
import { useDispatch } from 'react-redux';
import type { Props } from '../../types';

const Board = ({ onComplete, onError }: Props) => {
    const canvas = createRef<HTMLCanvasElement>();
    const dispatch = useDispatch();

    const handleHit = useCallback(() => {
        dispatch(addGamePoint());
    }, []);

    useEffect(() => {
        dispatch(resetCurrentScore());

        gameService.start(
            canvas!.current!,
            onComplete,
            onError,
            handleHit,
        );

        return () => {
            gameService.stop();
        };
    });

    return (
        <canvas className="game__board" ref={canvas} />
    );
};

export default Board;
