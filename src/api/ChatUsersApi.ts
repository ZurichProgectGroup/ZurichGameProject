
import {chatUsersTransportInstance} from 'Api/TransportInstances';
import {BaseAPI} from 'Api/BaseApi';
import {stringKeyString} from 'Utils/custom_types';
export default class ChatUsersAPI extends BaseAPI {

	// Add users to chat
	async create(data: stringKeyString): Promise<XMLHttpRequest> {
		return chatUsersTransportInstance.put('/', {data});
	}

	// Delete users from chat
	async request(data: stringKeyString): Promise<XMLHttpRequest> {
		return chatUsersTransportInstance.delete('/', {data});
	}
}
