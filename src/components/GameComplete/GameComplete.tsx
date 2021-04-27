import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './GameComplete.css';
import { Button, LinkButton } from 'components';
import { selectCurrentGameScore, selectUser } from 'selectors';
import LeaderboardApi from 'api/LeaderboardApi';
import ROUTES from 'components/App/consts';
import type { Props } from './types';

const GameComplete = (props: Props) => {
    const {
        onComplete,
        success,
    } = props;

    const currentGameScore = useSelector(selectCurrentGameScore);
    const { user } = useSelector(selectUser);

    useEffect(() => {
        LeaderboardApi.saveResult({
            score: currentGameScore,
            id: user?.id || 0,
            login: user?.login || '',
            avatar: user?.avatar || '',
        });
    }, [currentGameScore, user]);

    return (
        <div className="game-complete">
            <h1>{success ? 'You Won!' : 'Failed'}</h1>
            <Button onClick={onComplete}>
                {success ? 'Click me to continue!' : 'Click me to repeat!'}
            </Button>
            <LinkButton to={ROUTES.main}>
                Go home
            </LinkButton>
        </div>
    );
};

export default GameComplete;
