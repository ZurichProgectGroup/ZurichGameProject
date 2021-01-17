import React from 'react';
import type { Props } from './types';

const GameStart = (props: Props) => {
    const {
        onComplete,
    } = props;
    return (<button onClick={onComplete}>Click me to start</button>);
};

export default GameStart;
