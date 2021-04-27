import { ratingFieldName, TLeaderItemDTO } from 'api/LeaderboardApi';
import LeaderboardUserType from 'types/LeaderboardUser';

const mapToLeaderboard = (
    leaderboardDTO: TLeaderItemDTO[],
    userId: string | number,
): LeaderboardUserType[] => (
    leaderboardDTO.map(({ data }) => ({
        id: String(data.id),
        name: data.login,
        url: data.avatar,
        score: data[ratingFieldName],
        isUser: String(userId) === String(data.id),
    }))
);

export default mapToLeaderboard;
