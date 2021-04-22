import { useState, useLayoutEffect } from 'react';

const checkIsFullscreen = () => !!(document.fullscreenElement || document.mozFullScreenElement
    || document.webkitFullscreenElement || document.msFullscreenElement);

const requestFullscreen = (elem: {
    requestFullscreen: () => void;
    msRequestFullscreen: () => void;
    mozRequestFullScreen: () => void;
    webkitRequestFullscreen: (arg0: any) => void;
}) => {
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

export default function useFullscreen(elem: {
    current:{
        requestFullscreen: () => void;
        msRequestFullscreen: () => void;
        mozRequestFullScreen: () => void;
        webkitRequestFullscreen: (arg0: any) => void;
    }
}): [boolean, () => void, () => void] {
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
            document.onfullscreenchange = null;
        };
    });

    return [isFullscreen, setFullscreen, exitFullscreen];
}
