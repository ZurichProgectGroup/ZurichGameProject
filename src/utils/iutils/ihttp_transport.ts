import { StringKeyString } from 'Utils/custom_types';

export interface IHTTPTransportCtx {
    data?: StringKeyString|FormData|unknown;
    headers?: StringKeyString;
    timeout?: number;
}
