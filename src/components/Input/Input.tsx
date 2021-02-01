import React, { useMemo } from 'react';
import cn from 'classnames';
import './Input.css';
import type { Props } from './types';

const Input = (props: Props) => {
    const {
        errorText,
        labelText,
        description,
        className,
        ...inputProps
    } = props;

    const actualDescription = useMemo(() => description || errorText, [description, errorText]);

    return (
        <label className={cn('input', className, {
            input_warn: Boolean(errorText),
        })}
        >
            <span className="input__label">{labelText}</span>
            <input className="input__field" {...inputProps} />
            <span className={cn('input__desc', {
                input__desc_hidden: !actualDescription,
            })}
            >
                {actualDescription}
            </span>
        </label>
    );
};

export default Input;
