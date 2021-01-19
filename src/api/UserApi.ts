import {userTransportInstance} from 'Api/TransportInstances';
import {BaseAPI} from 'Api/BaseApi';
import {stringKeyString} from 'Utils/custom_types';

export default class UserAPI extends BaseAPI {
	async update(data?: stringKeyString): Promise<XMLHttpRequest> {
		return userTransportInstance.put('/profile', {data});
	}

	async updateAvatar(data: FormData): Promise<XMLHttpRequest> {
		return userTransportInstance.put('/profile/avatar', {data});
	}

	async updatePassword(data: stringKeyString): Promise<XMLHttpRequest> {
		return userTransportInstance.put('/password', {data});
	}
}
