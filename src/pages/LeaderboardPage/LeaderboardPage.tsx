import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LeaderboardPage.css';
import LinkButton from 'components/LinkButton';
import Card from 'components/Card';
import Leaderboard from 'components/Leaderboard';
import { getLeaderboard } from 'store/leaderboard';
import { selectLeaderboardList, selectUser } from 'selectors';

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
