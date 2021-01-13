import React, { useState } from 'react';
import './Login.css';
import {
    Card, Button, Title, LinkButton, Input,
} from 'Components';
import ROUTES from 'Components/App/consts';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-page">
            <Card className="login-page__card">
                <Title className="login-page__title" text="Log in" tagName="h1" />
                <form className="login-page__form">
                    <Input
                        className="login-page__input"
                        labelText="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input
                        className="login-page__input"
                        labelText="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className="login-page__button">Sign in</Button>
                </form>
                <LinkButton to={ROUTES.register}>I don`t have an account</LinkButton>
            </Card>
        </div>
    );
};

export default Login;
