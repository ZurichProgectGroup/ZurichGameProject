import React from 'react';
import Title from 'Components/Title';
import getRandomId from 'Utils/getRandomId';
import { Props } from './types';
import './Leaderboard.css';
import Row from './components';

const isTop = (index: number) => index < 3;
const isLeader = (index: number) => index === 0;

const Leaderboard: Props = ({ leaders }) => (
    <div className="leaderboard">
        <div className="leaderboard__header">
            <Title text="Leaderboard" />
        </div>
        <div className="leaderboard__content">
            <table className="leaderboard__table">
                <tbody>
                    {
                        leaders.map((leader, index) => (
                            <Row
                                key={getRandomId()}
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
