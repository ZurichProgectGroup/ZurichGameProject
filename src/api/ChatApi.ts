import { chatTransportInstance } from 'Api/TransportInstances';
import { StringKeyString } from 'Utils/custom_types';

export default class ChatAPI {
    static async create(_data?: StringKeyString): Promise<unknown> {
        return chatTransportInstance.post('/', { data: _data });
    }

    // Список чатов пользователя
    static async request(): Promise<unknown> {
        return chatTransportInstance.get('/');
    }
}