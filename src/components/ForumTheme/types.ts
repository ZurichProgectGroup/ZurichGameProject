import type { ForumThemeShort } from 'Types/ForumTheme';

export type OwnProps = {
    className?: string,
    theme: ForumThemeShort,
    onClick?: (id: number) => void
};
