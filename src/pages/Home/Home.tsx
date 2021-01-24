import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
import logo from 'Images/logo.png';
import { Avatar, Button } from 'Components';
import { ButtonSize, ButtonVariant } from 'Components/Button/types';
import NavigationList from 'Components/NavigationList';
import ROUTES from 'Components/App/consts';
import RouteMap from './const';

const Home = () => {
    const history = useHistory();
    const handleGameStart = useCallback(() => history.push(ROUTES.game), [history]);

    return (
        <div className="home">
            <div className="home__header">
                <Avatar size="medium" name="igor" url="https://picsum.photos/200" />
                <NavigationList routes={RouteMap} />
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
