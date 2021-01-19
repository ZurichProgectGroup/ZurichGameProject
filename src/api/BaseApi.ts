import {IApi} from 'Api/iapi/iapi';
import {stringKeyString} from 'Utils/custom_types';
export class BaseAPI implements IApi {
	async create(_data?: stringKeyString): Promise<XMLHttpRequest> {
		throw new Error('Method not implemented.');
	}

	async request(_data?: stringKeyString): Promise<XMLHttpRequest> {
		throw new Error('Method not implemented.');
	}

	async update(_data?: stringKeyString): Promise<XMLHttpRequest> {
		throw new Error('Method not implemented.');
	}

	async delete(): Promise<XMLHttpRequest> {
		throw new Error('Method not implemented.');
	}
}
