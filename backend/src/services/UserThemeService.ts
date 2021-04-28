import BaseService from './BaseService';
import UserTheme from '../models/UserTheme';

export default class UserThemeService implements BaseService {
    public static setUserTheme = async ({ userId, themeId }: {userId: number, themeId: number}) => {
        const [userTheme, created] = await UserTheme.findOrCreate({
            where: { userId },
            defaults: { userId, themeId },
        });

        if (!created) {
            userTheme.themeId = themeId;

            await userTheme.save();
        }

        return userTheme;
    };

    public static getUserTheme = async (userId: number) => {
        const userTheme = await UserTheme.findOne({ where: { userId } });

        if (userTheme) {
            return userTheme.$get('theme', { attributes: ['id', 'title'] });
        }

        return { id: 1, title: 'dark' };
    };
}
