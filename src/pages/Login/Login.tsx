import React, { useState, useCallback } from 'react';
import './Login.css';
import {
    Card, Button, Title, LinkButton, Input,
} from 'Components';
import ROUTES from 'Components/App/consts';
import {useDispatch,useSelector, connect} from 'react-redux';
import {login} from 'Store/account';
import {IStoreCTX} from 'Store';
import {Redirect}  from 'react-router-dom';
const selectUser = (state: IStoreCTX) => state.account.user;

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch =  useDispatch();
    const selectUser = (state: IStoreCTX) => state.account.user;
    const userData = useSelector(selectUser);

    if (userData){
        return (<Redirect  to = {ROUTES.main} />)
    }

    const handleFormSubmit = useCallback((event)=>{
        event.preventDefault();
        dispatch(login({login:userName, password:password}));
    },[]);
    const handleUserName = useCallback((e)=>{
        setUserName(e.target.value)
    },[]);
    const handlePassword = useCallback((e)=>{
        setPassword(e.target.value)
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
                        name="login"
                        value={userName}
                        onChange={handleUserName}
                    />
                    <Input
                        className="login-page__input"
                        labelText="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <Button type="submit" className="login-page__button">Sign in</Button>
                </form>
                <LinkButton to={ROUTES.register}>I don`t have an account</LinkButton>
            </Card>
        </div>
    );
};

export default  connect (selectUser)(Login);
