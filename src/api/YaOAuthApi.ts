import { StringKeyString } from 'utils/custom_types';
import { oauthTransportInstance } from './TransportInstances';

export default class YaOAuthAPI {
    static async request(): Promise<void> {
        const URI = window.location.origin;

        const serviceId = await oauthTransportInstance.get('/yandex/service-id', {
            data: {
                redirect_uri: URI,
            },
        });

        document.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${URI}`;
    }

    static async update(data: StringKeyString): Promise<unknown> {
        return oauthTransportInstance.post('/yandex', { data });
    }
}
