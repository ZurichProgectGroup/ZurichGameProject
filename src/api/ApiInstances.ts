import AuthAPI from 'Api/AuthApi';
import ChatAPI from 'Api/ChatApi';
import ChatUsersAPI from 'Api/ChatUsersApi';
import UserAPI from 'Api/UserApi';

export const authApiInstance = new AuthAPI();
export const chatApiInstance = new ChatAPI();
export const chatUsersApiInstance = new ChatUsersAPI();
export const userApiInstance = new UserAPI();
