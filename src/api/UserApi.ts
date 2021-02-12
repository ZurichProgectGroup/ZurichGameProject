import { userTransportInstance } from 'Api/TransportInstances';
import { StringKeyString } from 'Utils/custom_types';

export default class UserAPI {
    static async update(data?: UserDTO): Promise<UserDTO> {
        return userTransportInstance.put<UserDTO>('/profile', { data });
    }

    static async updateAvatar(data: FormData): Promise<XMLHttpRequest> {
        return userTransportInstance.put('/profile/avatar', { data });
    }

    static async updatePassword(data: StringKeyString): Promise<XMLHttpRequest> {
        return userTransportInstance.put('/password', { data });
    }
}
