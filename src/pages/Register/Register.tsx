import React, { useState } from 'react';
import './Register.css';
import {
    Card,
    Title,
} from 'Components';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const goNextStep = () => setCurrentStep(currentStep + 1);
    const goPrevStep = () => setCurrentStep(currentStep - 1);

    const getCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <FirstStep
                        goNextStep={goNextStep}
                        firstName={firstName}
                        setFirstName={setFirstName}
                        secondName={secondName}
                        setSecondName={setSecondName}
                        login={login}
                        setLogin={setLogin}
                    />
                );
            case 2:
                return (
                    <SecondStep
                        goPrevStep={goPrevStep}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        phone={phone}
                        setPhone={setPhone}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="register-page">
            <Card className="register-page__card">
                <Title className="register-page__title" text="registration" tagName="h1" />
                <form className="register-page__form">
                    {getCurrentStep()}
                </form>
            </Card>
        </div>
    );
};

export default Register;
