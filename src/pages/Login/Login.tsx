import React, { useState, useCallback } from 'react';
import './Login.css';
import {
    Card, Button, Title, LinkButton, Input,
} from 'Components';
import ROUTES from 'Components/App/consts';
import { useDispatch , useSelector} from 'react-redux';
import { login } from 'Store/account';import { IStoreCTX } from 'Store';
import { Redirect } from 'react-router-dom';

const selectUser = (state: IStoreCTX) => state.account.user;

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const handleFormSubmit = useCallback((event: { preventDefault: () => void; }) => {
        event.preventDefault();
        dispatch(login({
            login: userName,
            password,
        }));
    }, [userName, password]);

    if (userData) {
        return (<Redirect to={ROUTES.main} />);
    }
    return (
        <div className="login-page">
            <Card className="login-page__card">
                <Title className="login-page__title" text="Log in" tagName="h1" />
                <form
                    onSubmit={handleFormSubmit}
                    className="login-page__form"
                >
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
