import React from 'react';
import './GamePage.css';
import Game from 'Components/Game';
import { isServer } from 'Utils/_helpers';

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
