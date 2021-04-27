import { IStoreCTX } from 'Store';

declare global {
    interface Window {
        __INITIAL_STATE__: {
            state: IStoreCTX,
            location: string
        };
    }

    declare module '*.png' {
        const value: string;
        export default value;
    }

    declare module '*.ogg' {
        const value: string;
        export default value;
    }

    declare module '*.svg' {
        const value: string;
        export default value;
    }

    interface Document {
        mozCancelFullScreen?: () => Promise<void>;
        msExitFullscreen?: () => Promise<void>;
        webkitExitFullscreen?: () => Promise<void>;
        mozFullScreenElement?: Element;
        msFullscreenElement?: Element;
        webkitFullscreenElement?: Element;
    }

    interface HTMLElement {
        msRequestFullscreen?: () => Promise<void>;
        mozRequestFullscreen?: () => Promise<void>;
        webkitRequestFullscreen?: () => Promise<void>;
    }

    interface UserDTO {
        [key: string]: any;
        id?: number;
        first_name?: string;
        second_name?: string;
        display_name?: string | null;
        login?: string;
        avatar?: string | null;
        email?: string;
        phone?: string;
    }

    interface User {
        id: number;
        firstName: string;
        secondName: string;
        displayName: string | null;
        login: string;
        avatar: string | null;
        email: string;
        phone: string;
    }
}
