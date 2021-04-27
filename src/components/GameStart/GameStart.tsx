import React from 'react';
import './GameStart.css';
import Button from 'components/Button';
import type { Props } from './types';

const GameStart = (props: Props) => {
    const {
        onComplete,
    } = props;
    return (
        <div className="game-start">
            <Button onClick={onComplete}>Click me to start</Button>
        </div>
    );
};

export default GameStart;
