import React, { useCallback, useState } from 'react';
import './Login.css';
import {
    Button, Card, Input, LinkButton, Title,
} from 'components';
import ROUTES from 'components/App/consts';
import { useDispatch, useSelector } from 'react-redux';
import { login, yaLogin } from 'store/account';
import { Redirect } from 'react-router-dom';
import { selectUser } from 'selectors';
import { LinkButtonSize } from 'components/LinkButton/types';
import { LoadingStatus } from 'types/common';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { user, status } = useSelector(selectUser);

    const handleFormSubmit = useCallback((event: { preventDefault: () => void; }) => {
        event.preventDefault();
        dispatch(login({
            login: userName,
            password,
        }));
    }, [userName, password]);

    const handleYandexClick = useCallback(() => {
        dispatch(yaLogin());
    }, []);

    if (status === LoadingStatus.succeeded && user) {
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
                <LinkButton
                    size={LinkButtonSize.Small}
                    isButton
                    onClick={handleYandexClick}
                >
                    Sign in via yandex
                </LinkButton>
                <br />
                <LinkButton to={ROUTES.register}>I don`t have an account</LinkButton>
            </Card>
        </div>
    );
};

export default Login;
