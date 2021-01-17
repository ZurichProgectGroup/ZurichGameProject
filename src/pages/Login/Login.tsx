import React, { useState, useCallback } from 'react';
import './Login.css';
import {
    Card, Button, Title, LinkButton, Input,
} from 'Components';
import ROUTES from 'Components/App/consts';
import {useDispatch} from 'react-redux';
import {login} from 'Store/account';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch =  useDispatch();
    const handleFormSubmit = useCallback((event)=>{
        event.preventDefault();
        dispatch(login(event.target))
    },[]);

    return (
        <div className="login-page">
            <Card className="login-page__card">
                <Title className="login-page__title" text="Log in" tagName="h1" />
                <form
                    onSubmit={handleFormSubmit}
                    className="login-page__form">
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
                    <Button type="submit" className="login-page__button">Sign in</Button>
                </form>
                <LinkButton to={ROUTES.register}>I don`t have an account</LinkButton>
            </Card>
        </div>
    );
};

export default Login;
