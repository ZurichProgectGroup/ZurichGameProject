import React from 'react';
import './GameComplete.css';
import Button from 'Components/Button';
import type { Props } from './types';

const GameComplete = (props: Props) => {
    const {
        onComplete,
        success,
    } = props;
    return (
        <div className="game-complete">
            <h1>{success ? 'You are Win!' : 'Failed'}</h1>
            <Button onClick={onComplete}>
                {success ? 'Click me to continue!' : 'Click me to repeat!'}
            </Button>
        </div>
    );
};

export default GameComplete;
