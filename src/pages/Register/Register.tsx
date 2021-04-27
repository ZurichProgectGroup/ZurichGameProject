import React, { useState, useCallback, useMemo } from 'react';
import './Register.css';
import {
    Card,
    Title,
} from 'components';
import ROUTES from 'components/App/consts';
import { register } from 'store/account';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUser } from 'selectors';
import { LoadingStatus } from 'types/common';
import SecondStep from './SecondStep';
import FirstStep from './FirstStep';

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();
    const { user, status } = useSelector(selectUser);

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

    if (status === LoadingStatus.succeeded && user) {
        return (<Redirect to={ROUTES.main} />);
    }

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
