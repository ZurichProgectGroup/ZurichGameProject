import UserInfo from 'Types/UserInfo';

export type Comment = {
    id: number,
    author: UserInfo,
    date: string,
    message: string,
    answers?: Comment[],
};
