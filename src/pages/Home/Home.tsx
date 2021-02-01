import React from 'react';
import './Home.css';
import logo from 'Images/logo.png';
import { Avatar, Button } from 'Components';
import { ButtonSize, ButtonVariant } from 'Components/Button/types';
import NavigationList from 'Components/NavigationList';
import RouteMap from './const';

const Home = () => (
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
        >
            Start
        </Button>
    </div>
);

export default Home;
