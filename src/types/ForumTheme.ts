import type UserInfo from 'Types/UserInfo';
import type { Comment } from 'Types/Comment';

export type ForumThemeShort = {
    id: number,
    title: string,
    desc: string,
    lastMessage?: {
        date: string,
        userName: string
    },
    messagesCount: number,
    author: UserInfo
};

export type ForumTheme = {
    uploadDate: string,
    comments: Comment[],
} & ForumThemeShort;
