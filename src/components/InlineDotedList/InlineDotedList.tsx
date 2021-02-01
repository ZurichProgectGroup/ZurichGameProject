import React from 'react';
import type { Props } from './types';
import './InlineDotedList.css';

const InlineDotedList = ({ children } : Props) => (
    <ul className="inline-doted-list">
        {children}
    </ul>
);

const Item = ({ children }: Props) => <li className="inline-doted-list__item">{children}</li>;

InlineDotedList.Item = Item;

export default InlineDotedList;
