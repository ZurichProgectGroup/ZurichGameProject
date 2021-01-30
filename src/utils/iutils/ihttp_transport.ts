import { StringKeyString } from 'Utils/custom_types';

export interface IHTTPTransportCtx {
    data?: StringKeyString|FormData;
    headers?: StringKeyString;
    timeout?: number;
}
