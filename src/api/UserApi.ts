import { userTransportInstance } from 'api/TransportInstances';
import { StringKeyString } from 'utils/custom_types';

export default class UserAPI {
    static async update(data?: StringKeyString): Promise<unknown> {
        return userTransportInstance.put('/profile', { data });
    }

    static async updateAvatar(data: FormData): Promise<unknown> {
        return userTransportInstance.put('/profile/avatar', { data });
    }

    static async updatePassword(data: StringKeyString): Promise<unknown> {
        return userTransportInstance.put('/password', { data });
    }
}
