import { ChangeEvent, FormEvent } from 'react';

export type Props = {
    value?: string,
    onChange?: (e: ChangeEvent) => void,
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
};
