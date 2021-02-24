import { ratingFieldName, TLeaderItemDTO } from 'Api/LeaderboardApi';
import LeaderboardUserType from 'Types/LeaderboardUser';

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
