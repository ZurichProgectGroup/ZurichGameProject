import { IHTTPTransportCtx } from 'utils/iutils/ihttp_transport';
import httpRequest from 'utils/http_transport/http_request';
import { StringKeyString } from 'utils/custom_types';
import { METHOD } from 'utils/iutils/ihttp_request';

const JSON_HEADER: StringKeyString = {
    'Content-type': 'application/json; charset=utf-8',
};

function getContentType(data?: StringKeyString|FormData|unknown): StringKeyString|null {
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

function getBody(data?: StringKeyString|FormData|unknown): string|FormData|null {
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
    } as HeadersInit;
    return {
        method,
        // @ts-ignore
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

    async get<T>(path: string, options?: IHTTPTransportCtx) {
        return httpRequest<T>(
            this.url + path + queryStringify(options?.data as StringKeyString),
            prepareRequestCTX(METHOD.GET, false, options),
            options?.timeout,
        );
    }

    async put<T>(path: string, options?: IHTTPTransportCtx) {
        return httpRequest<T>(
            this.url + path,
            prepareRequestCTX(METHOD.PUT, true, options),
            options?.timeout,
        );
    }

    async post<T>(path: string, options?: IHTTPTransportCtx) {
        return httpRequest<T>(
            this.url + path,
            prepareRequestCTX(METHOD.POST, true, options),
            options?.timeout,
        );
    }

    async delete<T>(path: string, options?: IHTTPTransportCtx) {
        return httpRequest<T>(
            this.url + path,
            prepareRequestCTX(METHOD.DELETE, false, options),
            options?.timeout,
        );
    }
}
