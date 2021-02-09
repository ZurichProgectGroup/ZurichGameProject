import React, { useCallback, useRef } from 'react';
import './GamePage.css';
import Game from 'Components/Game';
import useFullscreen from 'Hooks/useFullscreen';
import { FullscreenButton } from 'Components';

const GamePage = () => {
    const fullscreenWrapper = useRef(null);
    const [isFullscreen, setFullscreen, exitFullscreen] = useFullscreen(fullscreenWrapper);

    const handleClick = useCallback(() => {
        if (isFullscreen) {
            exitFullscreen();
        } else {
            setFullscreen();
        }
    }, [isFullscreen]);

    return (
        <div ref={fullscreenWrapper} className="game-page">
            <FullscreenButton isFullscreen={isFullscreen} className="game-page__fullscreen-btn" onClick={handleClick} />
            <Game />
        </div>
    );
};

export default GamePage;