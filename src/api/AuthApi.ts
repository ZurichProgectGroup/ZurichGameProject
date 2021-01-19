import {stringKeyString} from 'Utils/custom_types';
import {authTransportInstance} from './TransportInstances';
import {BaseAPI} from 'Api/BaseApi';
export default class AuthAPI extends BaseAPI {
	async create(data: stringKeyString): Promise<XMLHttpRequest> {
		return authTransportInstance.post('/signup', {data});
	}

	async request(data: stringKeyString): Promise<XMLHttpRequest> {
		return authTransportInstance.post('/signin', {data});
	}

	async update(): Promise<XMLHttpRequest> {
		return authTransportInstance.get('/user');
	}

	async delete(): Promise<XMLHttpRequest> {
		return authTransportInstance.post('/logout');
	}
}
