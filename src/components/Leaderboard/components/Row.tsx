import React, { useMemo } from 'react';
import getRandomId from 'Utils/getRandomId';
import cn from 'Utils/classnames';
import UserIcon from 'Components/UserIcon';
import { Props } from './types';
import './Row.css';

const Row: Props = (props) => {
    const {
        isLeader,
        isTop,
        leader,
        rank,
    } = props;

    const avatarSize = useMemo(() => {
        if (isLeader) {
            return 'medium';
        }
        return 'small';
    }, [isLeader]);

    return (
        <tr
            key={getRandomId()}
            className={cn('leaderboard__row', {
                leaderboard__row_leader: Boolean(isLeader),
                leaderboard__row_top: Boolean(isTop) && !isLeader,
                leaderboard__row_user: leader.isUser,
            })}
        >
            <td className="leaderboard__rank">
                {`${rank}.`}
            </td>
            <td className="leaderboard__avatar">
                <UserIcon
                    name={leader.name}
                    url={leader.url}
                    size={avatarSize}
                    hideBorder={!isTop}
                />
            </td>
            <td className="leaderboard__name">
                {leader.name}
            </td>
            <td className="leaderboard__score">
                {leader.score}
            </td>
        </tr>
    );
};

export default Row;
