import HTTPTransport from 'utils/http_transport/http_transport';
import { BASE_URL } from 'consts';

const BASE_PATH = `${BASE_URL}/api`;

export const authTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');
export const leaderboardTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/leaderboard');
export const oauthTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/oauth');
export const userTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user');
export const topicsTransportInstance = new HTTPTransport(`${BASE_PATH}/topics`);
export const commentsTransportInstance = new HTTPTransport(`${BASE_PATH}/comments`);
export const userThemesInstance = new HTTPTransport(`${BASE_PATH}/user-themes`);
