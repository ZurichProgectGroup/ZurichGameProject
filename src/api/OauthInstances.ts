import OauthTransport from 'utils/oauth/oauthUtil';

const YA_OAUTH_SERVICE_ID = 'cf0c51a43a544747a6f9f0f1d6483852';
const YA_OAUTH_REDIRECT_URL = window.location.origin;
const YA_OAUTH_URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${YA_OAUTH_SERVICE_ID}&redirect_uri=${YA_OAUTH_REDIRECT_URL}`;

const yandexOauthInstance = new OauthTransport(YA_OAUTH_URL);

export default yandexOauthInstance;
