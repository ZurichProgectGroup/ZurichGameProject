import {stringKeyString} from '../custom_types';
export enum METHOD {
	GET = 'GET',
	PUT = 'PUT',
	POST = 'POST',
	DELETE = 'DELETE'
}

export interface IRequestCTX {
	method: METHOD;
	data?: unknown;
	headers?: stringKeyString;

}
