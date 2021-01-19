import {IHTTPTransportCtx} from 'Utils/iutils/ihttp_transport';
import {IRequestCTX, METHOD} from 'Utils/iutils/ihttp_request';
import {httpRequest} from 'Utils/http_transport/http_request';
import {stringKeyString} from 'Utils/custom_types';

const JSON_HEADER: stringKeyString = {
	'Content-type': 'application/json; charset=utf-8'
};

export default class HTTPTransport {
	private readonly _url: string;
	constructor(url: string) {
		this._url = url;
	}

	async get(path: string, options?: IHTTPTransportCtx) {
		return httpRequest(this._url + path + queryStringify(options?.data as stringKeyString), prepareRequestCTX(METHOD.GET, false, options), options?.timeout);
	}

	async put(path: string, options?: IHTTPTransportCtx) {
		return httpRequest(this._url + path, prepareRequestCTX(METHOD.PUT, true, options), options?.timeout);
	}

	async post(path: string, options?: IHTTPTransportCtx) {
		return httpRequest(this._url + path, prepareRequestCTX(METHOD.POST, true, options), options?.timeout);
	}

	async delete(path: string, options?: IHTTPTransportCtx) {
		return httpRequest(this._url + path, prepareRequestCTX(METHOD.DELETE, false, options), options?.timeout);
	}
}

function prepareRequestCTX(method: METHOD, useBody: boolean, options: IHTTPTransportCtx = {}): IRequestCTX {
	const headers: stringKeyString|null = {...getContentType(options?.data), ...options.headers};
	console.log('headers', headers);
	return {
		method: method,
		headers: headers,
		data: useBody ? getBody(options?.data) : undefined

	};
}

function queryStringify(data?: stringKeyString): string {
	let result = '';
	if (data) {
		/* eslint-disable-next-line @typescript-eslint/ban-types */
		result = '?' + Object.keys(data as object).reduce((acc: string, key: string) => {
			return `${acc}${key}=${data[key] as unknown as string}&`;
		}, result).slice(0, -1);
	}

	return result;
}

function getContentType(data?: stringKeyString|FormData): stringKeyString|null {
	console.log('getContentType', data, typeof data, typeof data === 'object');
	if (!data) {
		return null;
	}

	if (data instanceof FormData) {
		return null;
	}

	if (typeof data === 'object') {
		return JSON_HEADER;
	}

	return null;
}

function getBody(data?: stringKeyString|FormData): string|FormData|null {
	if (data instanceof FormData) {
		return data;
	}

	if (typeof data === 'object') {
		return JSON.stringify(data);
	}

	return String(data);
}
