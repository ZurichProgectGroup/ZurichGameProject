import LeaderboardUserType from 'Types/LeaderboardUser';
import { FC } from 'react';

export type OwnProps = {
    leaders: LeaderboardUserType[]
};

export type Props = FC<OwnProps>;
