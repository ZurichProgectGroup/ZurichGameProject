import { useState, useLayoutEffect } from 'react';

const checkIsFullscreen = () => !!(document.fullscreenElement || document.mozFullScreenElement
    || document.webkitFullscreenElement || document.msFullscreenElement);

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

export default function useFullscreen(elem): [boolean, () => void, () => void] {
    const [isFullscreen, setIsFullscreen] = useState(
        checkIsFullscreen(),
    );

    const setFullscreen = () => {
        if (elem.current == null) return;

        requestFullscreen(elem.current);
    };

    useLayoutEffect(() => {
        document.onfullscreenchange = () => setIsFullscreen(checkIsFullscreen());

        return () => {
            document.onfullscreenchange = undefined;
        };
    });

    return [isFullscreen, setFullscreen, exitFullscreen];
}
