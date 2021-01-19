import React from 'react';
import './Textarea.css';
import cn from 'classnames';
import type { Props } from './types';

const Textarea = ({
    label, value, className = '', ...otherProps
}: Props) => (
    <label className={cn('textarea', className)}>
        <span className="textarea__label">
            {label}
        </span>
        <textarea value={value} className="textarea__input" {...otherProps} />
    </label>
);

export default Textarea;
