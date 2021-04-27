import LeaderboardUserType from 'types/LeaderboardUser';

export type OwnProps = {
    isLeader?: boolean,
    isTop?: boolean,
    leader: LeaderboardUserType,
    rank: number,
};

export type Props = OwnProps;
