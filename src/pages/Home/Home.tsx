import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
import logo from 'Images/logo.png';
import {
    Avatar, Button, LinkButton, DarkModeToggle, FullscreenButton,
} from 'Components';
import { ButtonSize, ButtonVariant } from 'Components/Button/types';
import NavigationList from 'Components/NavigationList';
import ROUTES from 'Components/App/consts';
import { useSelector } from 'react-redux';
import { selectUser } from 'Selectors';
import useFullscreen from 'Hooks/useFullscreen';
import RouteMap from './const';

const Home = () => {
    const history = useHistory();
    const handleGameStart = useCallback(() => history.push(ROUTES.game), [history]);
    const { user, theme } = useSelector(selectUser);

    const fullscreenWrapper = document.querySelector('.app');
    const [isFullscreen, setFullscreen, exitFullscreen] = useFullscreen(fullscreenWrapper);

    const handleClick = useCallback(() => {
        if (isFullscreen) {
            exitFullscreen();
        } else {
            setFullscreen();
        }
    }, [isFullscreen]);

    return (
        <div className="home">
            <div className="home__header">
                <LinkButton to={ROUTES.account}>
                    <Avatar size="medium" name={user?.firstName ?? ''} url={user?.avatar} />
                </LinkButton>
                <NavigationList routes={RouteMap} />
                <div className="home__side-buttons">
                    <DarkModeToggle theme={theme} />
                    <FullscreenButton isFullscreen={isFullscreen} onClick={handleClick} />
                </div>
            </div>
            <img className="home__logo" src={logo} width={685} height={320} alt="logo" />
            <Button
                className="home__button"
                variant={ButtonVariant.Filled}
                size={ButtonSize.Large}
                onClick={handleGameStart}
            >
                Start
            </Button>
        </div>
    );
};

export default Home;
