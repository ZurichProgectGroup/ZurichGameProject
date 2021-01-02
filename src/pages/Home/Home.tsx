import React from 'react';
import './Home.css';
import Input from 'Components/Input';
import Button from 'Components/Button';
import LinkButton from 'Components/LinkButton';
import Avatar from 'Components/Avatar';

const Home = () => (
    <div className="wrapper">
        <Input labelText="username" />
        <Input labelText="Label" description="Description" />
        <Input labelText="password" errorText="wrong password" />
        <Button>Sing in</Button>
        <LinkButton to="/404">I DON’T HAVE AN ACCOUNT</LinkButton>
        <Avatar name="igor" size="small" url="https://picsum.photos/200" />
        <Avatar name="igor" size="medium" url="https://picsum.photos/200" />
        <Avatar name="igor" url="https://picsum.photos/200" hasChange />
    </div>
);

export default Home;
