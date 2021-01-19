import React, { useState } from 'react';
import './Register.css';
import {
    Card,
    Title,
} from 'Components';
import ROUTES from 'Components/App/consts';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import {register} from 'Store/account';
import {useDispatch, useSelector, connect} from 'react-redux';
import {IStoreCTX} from 'Store';
import {Redirect}  from 'react-router-dom';
const selectUser = (state: IStoreCTX) => state.account.user;

const Register = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch =  useDispatch();
    const userData = useSelector(selectUser);

    if (userData){
        return (<Redirect  to = {ROUTES.main} />)
    }

    const goNextStep = () => {
        if (currentStep > 1){
            dispatch(register({
                first_name:firstName,
                second_name:secondName,
                login:login,
                email:email,
                password:password,
                phone:phone
            }));//.then((data:any) => console.log(" dispatch userData", data));
        } else {
            setCurrentStep(currentStep + 1);
        }
    };
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
                        goNextStep={goNextStep}
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

export default connect (selectUser)(Register);
