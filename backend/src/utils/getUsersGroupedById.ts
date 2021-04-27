import { AxiosInstance } from 'axios';
import { User } from '../types';

export default async function getUsersGroupedById(
    userIds: number[],
    api: AxiosInstance,
): Promise<{[key: number]: User}> {
    const users = (await Promise.all(
        [...userIds].map((userId) => api.get<User>(`user/${userId}`)),
    )).map(({ data }) => data);

    return users.reduce((acc, curr: User) => {
        const { id: userId } = curr;
        return {
            ...acc,
            [userId]: curr,
        };
    }, {});
}
