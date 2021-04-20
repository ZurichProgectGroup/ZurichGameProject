import type { Comment } from 'Types/Comment';

export type Props = {
    comments: Comment[],
    hideTitle?: boolean,
    count?: number,
};
