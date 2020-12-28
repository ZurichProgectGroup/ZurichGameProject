import { InputHTMLAttributes } from 'react';

export type OwnProps = {
    errorText?: string;
    labelText: string,
    description?: string,
} & InputHTMLAttributes<HTMLInputElement>;

export type Props = OwnProps;
