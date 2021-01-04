import React from 'react';
import './Register.css';
import {
    Button, LinkButton, Input,
} from 'Components';
import ROUTES from 'Components/App/consts';
import type { FirstStepProps } from './types';

const FirstStep = ({
    goNextStep,
    firstName,
    secondName,
    login,
    setFirstName,
    setSecondName,
    setLogin,
}: FirstStepProps) => (
    <>
        <Input
            className="register-page__input"
            labelText="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
            className="register-page__input"
            labelText="second name"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
        />
        <Input
            className="register-page__input"
            labelText="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
        />
        <Button onClick={goNextStep} className="register-page__button">next</Button>
        <LinkButton to={ROUTES.login}>I already have an account</LinkButton>
    </>
);

export default FirstStep;
