import React from 'react';
import './PlusButton.css';
import cn from 'classnames';
import type { Props } from './types';

const PlusButton = ({
    onClick,
    className = '',
}: Props) => (
    <button type="button" onClick={onClick} className={cn('plus-button', className)}>Add</button>
);

export default PlusButton;
