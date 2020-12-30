import LeaderboardUserType from 'Types/LeaderboardUser';

export type OwnProps = {
    isLeader?: boolean,
    isTop?: boolean,
    leader: LeaderboardUserType,
    rank: number,
};

export type Props = OwnProps;
