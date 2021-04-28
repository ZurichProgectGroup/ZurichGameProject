import { useState, useEffect } from 'react';
import { isServer } from 'utils/_helpers';

const checkIsFullscreen = () => !!(!isServer
    && (document.fullscreenElement || document.mozFullScreenElement
    || document.webkitFullscreenElement || document.msFullscreenElement));

const requestFullscreen = (elem) => {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }

    if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }

    if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }

    if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen((<any>Element).ALLOW_KEYBOARD_INPUT);
    }
};

const exitFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }

    if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

    if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }

    if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
};

export default function useFullscreen(elem): [boolean, (() => void), (() => void)] {
    const [isFullscreen, setIsFullscreen] = useState(
        checkIsFullscreen(),
    );

    const setFullscreen = () => {
        if (isServer) return;

        requestFullscreen(elem);
    };

    useEffect(() => {
        document.onfullscreenchange = () => setIsFullscreen(checkIsFullscreen());

        return () => {
            document.onfullscreenchange = null;
        };
    });

    return [isFullscreen, setFullscreen, exitFullscreen];
}
