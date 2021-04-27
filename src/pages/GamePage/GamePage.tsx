import React from 'react';
import './GamePage.css';
import Game from 'components/Game';
import { isServer } from 'utils/_helpers';

const GamePage = () => {
    if (isServer) {
        return null;
    }

    return (
        <div className="game-page">
            <Game />
        </div>
    );
};

export default GamePage;
