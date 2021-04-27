import type { Comment } from 'types/Comment';

export type Props = {
    comments: Comment[],
    hideTitle?: boolean,
    count?: number,
};
