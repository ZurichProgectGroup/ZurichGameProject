import configureAppStore from 'Store';
import getInitialState from 'store/getInitialState';
import { EnhancedStore } from '@reduxjs/toolkit';
import fetch from 'node-fetch';

function ssrInitStore(request): Promise<EnhancedStore> {
    const initialState = getInitialState();
    const store = configureAppStore(initialState);

    return new Promise<EnhancedStore>((res) => {
        fetch('https://ya-praktikum.tech/api/v2/user/profile', {
            method: 'PUT',
            credentials: 'include',
            cookies: request.cookies,
        }).then(async (data) => {
            if (data.status === 200) {
                const result = await data.json();
                res(result);
            } else {
                res(store);
            }
        }).catch(() => {
            res(store);
        });
    });
}

export default ssrInitStore;
