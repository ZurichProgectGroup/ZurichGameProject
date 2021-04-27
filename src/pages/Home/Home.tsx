import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
import logo from 'images/logo.png';
import {
    Avatar, Button, LinkButton, DarkModeToggle, FullscreenButton,
} from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/types';
import NavigationList from 'components/NavigationList';
import ROUTES from 'components/App/consts';
import { useSelector } from 'react-redux';
import { selectUser } from 'selectors';
import useFullscreen from 'hooks/useFullscreen';
import { isServer } from 'utils/_helpers';
import RouteMap from './const';

const Home = () => {
    const history = useHistory();
    const handleGameStart = useCallback(() => history.push(ROUTES.game), [history]);
    const { user, theme } = useSelector(selectUser);

    const fullscreenWrapper = (!isServer && document.querySelector('.app')) || null;
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
                    <Avatar size="medium" name={user?.firstName ?? ''} url={user?.avatar || undefined} />
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
