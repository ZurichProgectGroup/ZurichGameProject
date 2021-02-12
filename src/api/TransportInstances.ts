import HTTPTransport from 'Utils/http_transport/http_transport';

export const authTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');
export const chatTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats');
export const chatUsersTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats/users');
export const leaderboardTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/leaderboard');
export const oauthTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/oauth');
export const userTransportInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user');
