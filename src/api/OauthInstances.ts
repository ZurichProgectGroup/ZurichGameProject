import OauthTransport from 'utils/oauth/oauthUtil';

// seems to be right in the real word,
// but in practicum there is no way to register redirect url,
// it always must be empty
// const OAUTH_REDIRECT_URL = window.location.host;

const YA_OAUTH_SERVICE_ID = '243f5d3b0fa04e5aa9b8ff6508db3a64';
const YA_OAUTH_REDIRECT_URL = '';
const YA_OAUTH_URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${YA_OAUTH_SERVICE_ID}&redirect_uri=${YA_OAUTH_REDIRECT_URL}`;

const yandexOauthInstance = new OauthTransport(YA_OAUTH_URL);

export default yandexOauthInstance;
