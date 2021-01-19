import {stringKeyString} from 'Utils/custom_types';

export interface IHTTPTransportCtx {
	data?: stringKeyString|FormData;
	headers?: stringKeyString;
	timeout?: number;
}
