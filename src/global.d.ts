declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
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
