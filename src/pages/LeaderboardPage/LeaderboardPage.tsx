import React from 'react';
import './LeaderboardPage.css';
import LinkButton from 'Components/LinkButton';
import Card from 'Components/Card';
import leaderboard from 'Mocks/leaderboard';
import Leaderboard from 'Components/Leaderboard';

const LeaderboardPage = () => (
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

export default LeaderboardPage;
