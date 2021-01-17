import React from 'react';
import './Home.css';
import logo from 'Images/logo.png';
import cup from 'Images/cup.png';
import { Avatar, Button, LinkButton } from 'Components';
import { ButtonSize, ButtonVariant } from 'Components/Button/types';

const Home = () => (
    <div className="home">
        <div className="home__header">
            <Avatar size="medium" name="igor" url="https://picsum.photos/200" />
            <LinkButton to="/leaderboard">
                <img src={cup} alt="cup" />
            </LinkButton>
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
