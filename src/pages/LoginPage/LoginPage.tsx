import {login} from 'Store/account'
import {useDispatch} from 'react-redux'
import React from 'react';
import './LoginPage.css';
import Input from 'Components/Input';
import Button from 'Components/Button';


const LoginPage = () => {
    const dispatch =  useDispatch();
    return (<div>
        <form onSubmit={(event:any) => {
            event.preventDefault();
            console.log("submit", event.target);
            dispatch(login(event.target))
        }}>
            <Input labelText="login" />
            <Input labelText="password" />
            <Button type="submit">Login</Button>
          </form >
      </div>);
};

export default LoginPage;
