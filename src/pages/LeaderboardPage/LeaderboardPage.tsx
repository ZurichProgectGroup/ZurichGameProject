import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LeaderboardPage.css';
import LinkButton from 'Components/LinkButton';
import Card from 'Components/Card';
import Leaderboard from 'Components/Leaderboard';
import { getLeaderboard } from 'Store/leaderboard';
import { selectLeaderboardList, selectUser } from 'Selectors';

const LeaderboardPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const leaderboard = useSelector(selectLeaderboardList);

    useEffect(() => {
        dispatch(getLeaderboard());
    }, [user]);

    return (
        <div className="leaderboard-page">
            <header className="leaderboard-page__header">
                <LinkButton to="/">
                    {'< Back'}
                </LinkButton>
            </header>
            <Card className="leaderboard-page__content">
                <Leaderboard leaders={leaderboard} />
            </Card>
        </div>
    );
};

export default LeaderboardPage;
