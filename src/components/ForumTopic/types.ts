import { MouseEvent, KeyboardEvent } from 'react';
import type { Topic } from 'types/ForumTopic';

export type OwnProps = {
    className?: string,
    theme: Topic,
    onClick?: (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void
};
