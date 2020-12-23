import React from 'react';
import './Home.css';
import Input from 'Components/Input';
import Button from 'Components/Button';
import LinkButton from 'Components/LinkButton';
import UserIcon from 'Components/UserIcon';

const Home = () => (
    <div className="wrapper">
        <Input labelText="username" />
        <Input labelText="Label" description="Description" />
        <Input labelText="password" errorText="wrong password" />
        <Button>Sing in</Button>
        <LinkButton to="/404">I DON’T HAVE AN ACCOUNT</LinkButton>
        <UserIcon name="igor" size="small" url="https://picsum.photos/200" />
        <UserIcon name="igor" size="medium" url="https://picsum.photos/200" />
        <UserIcon name="igor" url="https://picsum.photos/200" hasChange />
    </div>
);

export default Home;
