export const enum ThemeEnum {
    dark = 1,
    light = 2,
}

export type Theme = {
    id: ThemeEnum;
    title?: 'dark' | 'light';
};
