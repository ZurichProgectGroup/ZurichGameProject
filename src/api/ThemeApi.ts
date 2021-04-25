import { Theme } from 'Types/Theme';
import { userThemesInstance } from './TransportInstances';

export default class ThemeApi {
    static getUsersTheme(id: number): Promise<Theme> {
        return userThemesInstance.get<Theme>(`/${id}`);
    }

    static async setUsersTheme({ themeId, userId }: {themeId: number, userId: number}) {
        await userThemesInstance.post('/', { data: { themeId, userId } });
    }
}
