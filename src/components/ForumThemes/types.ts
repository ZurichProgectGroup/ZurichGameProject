import type { ForumThemeShort } from 'Types/ForumTheme';

export type OwnProps = {
    themes: ForumThemeShort[],
    onThemeClick?: (id: number) => void
};
