
import {chatTransportInstance} from 'Api/TransportInstances';
import {BaseAPI} from 'Api/BaseApi';
import {stringKeyString} from 'Utils/custom_types';

export default class ChatAPI extends BaseAPI {
	async create(_data?: stringKeyString): Promise<XMLHttpRequest> {
		return chatTransportInstance.post('/', {data: _data});
	}

	// Список чатов пользователя
	async request(): Promise<XMLHttpRequest> {
		return chatTransportInstance.get('/');
	}
}
