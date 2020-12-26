import React from 'react';
import './Delimiter.css';
import { Props } from './types';

const Delimiter: Props = (props) => {
    const {
        ...delimiterProps
    } = props;

    return (
        <div {...delimiterProps} className="delimiter"></div>
    );
};

export default Delimiter;
