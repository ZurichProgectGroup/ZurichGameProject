import React, { useMemo } from 'react';
import cn from 'Utils/classnames';
import './Input.css';
import { Props } from './types';

const Input: Props = (props) => {
    const {
        errorText,
        labelText,
        description,
        ...inputProps
    } = props;

    const noDescription = useMemo(() => !(description || errorText), [description, errorText]);

    return (
        <label className={cn('input', {
            input_warn: Boolean(errorText),
        })}
        >
            <span className="input__label">{labelText}</span>
            <input className="input__field" {...inputProps} />
            <span className={cn('input__desc', {
                'visibility-hidden': noDescription,
            })}
            >
                {errorText || description}
            </span>
        </label>
    );
};

export default Input;
