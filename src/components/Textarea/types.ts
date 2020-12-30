import { TextareaHTMLAttributes } from 'react';

export type Props = {
    value?: string,
    label: string,
    className?: string,
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
