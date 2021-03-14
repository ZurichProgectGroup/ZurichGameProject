import type { Topic } from 'types/ForumTopic';

export type OwnProps = {
    topics: Topic[],
    onThemeClick?: (id: number) => void
};
