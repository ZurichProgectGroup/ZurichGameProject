import {IRequestCTX} from 'Utils/iutils/ihttp_request';

export async function httpRequest(url: string, options: IRequestCTX, timeout = 5000): Promise<XMLHttpRequest> {
	return new Promise((resolve, reject) => {
		const xhr: any = new window.XMLHttpRequest();
		xhr.onreadystatechange = (_e: ProgressEvent) => {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 400) {
					resolve(xhr);
				} else {
					reject(xhr);
				}
			}
		};

		xhr.ontimeout = (_e: ProgressEvent) => reject(xhr);
		xhr.onabort = (_e: ProgressEvent) => reject(xhr);
		xhr.timeout = timeout;

		xhr.open(options.method, url);
		if (options.headers) {
			Object.entries(options.headers).forEach(([header, value]) => {
				xhr.setRequestHeader(header, value);
			});
		}

		xhr.withCredentials = true;
		xhr.send(options.data);
	});
}
