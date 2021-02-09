import { chatUsersTransportInstance } from 'Api/TransportInstances';
import { StringKeyString } from 'Utils/custom_types';

export default class ChatUsersAPI {
    // Add users to chat
    static async create(data: StringKeyString): Promise<XMLHttpRequest> {
        return chatUsersTransportInstance.put('/', { data });
    }

    // Delete users from chat
    static async request(data: StringKeyString): Promise<XMLHttpRequest> {
        return chatUsersTransportInstance.delete('/', { data });
    }
}
