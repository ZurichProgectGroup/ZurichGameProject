import React, { useState, useCallback, useMemo } from 'react';
import './Register.css';
import {
    Card,
    Title,
} from 'Components';
import ROUTES from 'Components/App/consts';
import { register } from 'Store/account';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreCTX } from 'Store';
import { Redirect } from 'react-router-dom';
import SecondStep from './SecondStep';
import FirstStep from './FirstStep';

const selectUser = (state: IStoreCTX) => state.account.user;

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();
    const userData = useSelector(selectUser);

    const handleFormSubmit = useCallback((event: { preventDefault: () => void; }) => {
        event.preventDefault();
        dispatch(register({
            first_name: firstName,
            second_name: secondName,
            login,
            email,
            password,
            phone,
        }));
    }, [firstName, secondName, login, email, password, phone]);

    if (userData) {
        return (<Redirect to={ROUTES.main} />);
    }

    const goNextStep = () => setCurrentStep(currentStep + 1);
    const goPrevStep = () => setCurrentStep(currentStep - 1);

    const currentStepComponent = useMemo(() => {
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
    }, [currentStep, firstName, secondName, login, email, password, phone]);

    return (
        <div className="register-page">
            <Card className="register-page__card">
                <Title className="register-page__title" text="registration" tagName="h1" />
                <form
                    className="register-page__form"
                    onSubmit={handleFormSubmit}
                >
                    {currentStepComponent}
                </form>
            </Card>
        </div>
    );
};

export default Register;
