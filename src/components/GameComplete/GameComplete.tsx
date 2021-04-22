import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './GameComplete.css';
import Button from 'Components/Button';
import { selectCurrentGameScore, selectUser } from 'Selectors';
import LeaderboardApi from 'Api/LeaderboardApi';
import type { Props } from './types';

const GameComplete = (props: Props) => {
    const {
        onComplete,
        success,
    } = props;

    const currentGameScore = useSelector(selectCurrentGameScore);
    const userInfo = useSelector(selectUser);

    useEffect(() => {
        LeaderboardApi.saveResult({
            score: currentGameScore,
            id: userInfo?.id || 0,
            login: userInfo?.login || '',
            avatar: userInfo?.avatar || '',
        });
    }, [currentGameScore, userInfo]);

    return (
        <div className="game-complete">
            <h1>{success ? 'You are Win!' : 'Failed'}</h1>
            <Button onClick={onComplete}>
                {success ? 'Click me to continue!' : 'Click me to repeat!'}
            </Button>
        </div>
    );
};

export default GameComplete;
