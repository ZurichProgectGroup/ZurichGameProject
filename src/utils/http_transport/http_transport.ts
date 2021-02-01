import { IHTTPTransportCtx } from 'Utils/iutils/ihttp_transport';
import httpRequest from 'Utils/http_transport/http_request';
import { StringKeyString } from 'Utils/custom_types';
import { METHOD } from 'Utils/iutils/ihttp_request';

const JSON_HEADER: StringKeyString = {
    'Content-type': 'application/json; charset=utf-8',
};

function getContentType(data?: StringKeyString|FormData): StringKeyString|null {
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

function getBody(data?: StringKeyString|FormData): string|FormData|null {
    if (data instanceof FormData) {
        return data;
    }

    if (typeof data === 'object') {
        return JSON.stringify(data);
    }

    return String(data);
}

function prepareRequestCTX(method: METHOD,
    useBody: boolean,
    options: IHTTPTransportCtx = {}): RequestInit {
    const headers = {
        ...getContentType(options?.data),
        ...options.headers,
    };
    return {
        method,
        headers,
        body: useBody ? getBody(options?.data) : undefined,

    };
}

function queryStringify(data?: StringKeyString): string {
    let result = '';
    if (data) {
        /* eslint-disable-next-line @typescript-eslint/ban-types */
        result = `?${Object.keys(data as object).reduce(
            (acc: string, key: string) => `${acc}${key}=${data[key] as unknown as string}&`, result,
        ).slice(0, -1)}`;
    }

    return result;
}

export default class HTTPTransport {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    async get(path: string, options?: IHTTPTransportCtx) {
        return httpRequest(
            this.url + path + queryStringify(options?.data as StringKeyString),
            prepareRequestCTX(METHOD.GET, false, options),
            options?.timeout,
        );
    }

    async put(path: string, options?: IHTTPTransportCtx) {
        return httpRequest(
            this.url + path,
            prepareRequestCTX(METHOD.PUT, true, options),
            options?.timeout,
        );
    }

    async post(path: string, options?: IHTTPTransportCtx) {
        return httpRequest(
            this.url + path,
            prepareRequestCTX(METHOD.POST, true, options),
            options?.timeout,
        );
    }

    async delete(path: string, options?: IHTTPTransportCtx) {
        return httpRequest(
            this.url + path,
            prepareRequestCTX(METHOD.DELETE, false, options),
            options?.timeout,
        );
    }
}