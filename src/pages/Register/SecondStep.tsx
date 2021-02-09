import React from 'react';
import './Register.css';
import {
    Button, LinkButton, Input,
} from 'Components';
import ROUTES from 'Components/App/consts';
import type { SecondStepProps } from './types';

const SecondStep = ({
    goPrevStep,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
}: SecondStepProps) => (

    <>
        <Input
            className="register-page__input"
            labelText="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Input
            className="register-page__input"
            labelText="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Input
            className="register-page__input"
            labelText="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="submit" className="register-page__button">Register</Button>
        <LinkButton onClick={goPrevStep} to={ROUTES.register}>Back</LinkButton>
    </>
);

export default SecondStep;
