export type OwnProps = {
    url?: string,
    name: string,
    hasChange?: boolean,
    size?: 'small' | 'medium' | 'super-small',
    hideBorder?: boolean,
    onChange?: (id: string, file: File) => unknown
};

export type Props = OwnProps;
