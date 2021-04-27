import HTTPTransport from 'utils/http_transport/http_transport';

export const authTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');
export const leaderboardTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/leaderboard');
export const oauthTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/oauth');
export const userTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user');
export const topicsTransportInstance = new HTTPTransport('https://local.ya-praktikum.tech/topics');
export const commentsTransportInstance = new HTTPTransport('https://local.ya-praktikum.tech/comments');
export const userThemesInstance = new HTTPTransport('https://local.ya-praktikum.tech/user-themes');
