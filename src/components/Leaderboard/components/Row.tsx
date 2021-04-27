import React, { useMemo } from 'react';
import cn from 'classnames';
import Avatar from 'components/Avatar';
import type { Props } from './types';
import './Row.css';

const Row = (props: Props) => {
    const {
        isLeader,
        isTop,
        leader,
        rank,
    } = props;

    const avatarSize = useMemo(() => (isLeader ? 'medium' : 'small'), [isLeader]);

    return (
        <tr
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
                <Avatar
                    name={leader?.name || ''}
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
