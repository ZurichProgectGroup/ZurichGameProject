import React from 'react';
import Title from 'components/Title';
import type { Props } from './types';
import './Leaderboard.css';
import Row from './components';

const isTop = (index: number) => index < 3;
const isLeader = (index: number) => index === 0;

const Leaderboard = ({ leaders }: Props) => (
    <div className="leaderboard">
        <div className="leaderboard__header">
            <Title text="Leaderboard" tagName="h2" />
        </div>
        <div className="leaderboard__content">
            <table className="leaderboard__table">
                <tbody>
                    {
                        leaders.map((leader, index) => (
                            <Row
                                key={`leaderboard_${leader.id}`}
                                leader={leader}
                                rank={index + 1}
                                isTop={isTop(index)}
                                isLeader={isLeader(index)}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
);

export default Leaderboard;
