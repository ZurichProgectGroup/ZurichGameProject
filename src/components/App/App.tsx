import React from 'react';
import './App.css';
import Input from 'Components/Input';
import Button from 'Components/Button';
import LinkButton from 'Components/LinkButton';
import UserIcon from 'Components/UserIcon';

const App = () => (
    <div className="wrapper">
        <Input labelText="username" />
        <Input labelText="Label" description="Description" />
        <Input labelText="password" errorText="wrong password" />
        <Button>Sing in</Button>
        <LinkButton>I DON’T HAVE AN ACCOUNT</LinkButton>
        <UserIcon name="igor" small url="https://picsum.photos/200" />
        <UserIcon name="igor" hasChange medium url="https://picsum.photos/200" />
        <UserIcon name="igor" url="https://picsum.photos/200" hasChange />
    </div>
);

export default App;
