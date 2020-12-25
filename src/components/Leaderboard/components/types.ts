import LeaderboardUserType from 'Types/LeaderboardUser';
import { FC } from 'react';

export type OwnProps = {
    isLeader?: boolean,
    isTop?: boolean,
    leader: LeaderboardUserType,
    rank: number,
};

export type Props = FC<OwnProps>;
