import OauthTransport from 'utils/oauth/oauthUtil';
import { BASE_URL } from 'consts';

const YA_OAUTH_SERVICE_ID = '243f5d3b0fa04e5aa9b8ff6508db3a64';
const YA_OAUTH_URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${YA_OAUTH_SERVICE_ID}&redirect_uri=${BASE_URL}`;

const yandexOauthInstance = new OauthTransport(YA_OAUTH_URL);

export default yandexOauthInstance;
