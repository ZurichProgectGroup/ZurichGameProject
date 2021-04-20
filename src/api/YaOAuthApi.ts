import { StringKeyString } from 'Utils/custom_types';
import { yandexOauthInstance } from './OauthInstances';
import { oauthTransportInstance } from './TransportInstances';

export default class YaOAuthAPI {
    static async request(): Promise<unknown> {
        return yandexOauthInstance.authorize();
    }

    static async update(data: StringKeyString): Promise<unknown> {
        return oauthTransportInstance.post('/yandex', { data });
    }
}
