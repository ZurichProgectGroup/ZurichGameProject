import { StringKeyString } from 'utils/custom_types';
import { authTransportInstance } from './TransportInstances';

export default class AuthAPI {
    static async create(data: StringKeyString): Promise<unknown> {
        return authTransportInstance.post('/signup', { data });
    }

    static async request(data: StringKeyString): Promise<unknown> {
        return authTransportInstance.post('/signin', { data });
    }

    static async update(): Promise<User> {
        return authTransportInstance.get('/user');
    }

    static async delete(): Promise<unknown> {
        return authTransportInstance.post('/logout');
    }
}
