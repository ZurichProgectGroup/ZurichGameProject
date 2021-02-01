import { MouseEvent, KeyboardEvent } from 'react';
import type { ForumThemeShort } from 'Types/ForumTheme';

export type OwnProps = {
    className?: string,
    theme: ForumThemeShort,
    onClick?: (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void
};
