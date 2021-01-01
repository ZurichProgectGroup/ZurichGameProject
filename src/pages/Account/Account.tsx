import React, { useState, useCallback, MouseEvent } from 'react';
import './Account.css';
import Input from 'Components/Input';
import Button from 'Components/Button';
import LinkButton from 'Components/LinkButton';
import UserIcon from 'Components/UserIcon';
import Alert from 'Components/Alert';
import cn from 'classnames';
import successIconPath from 'Images/success-icon.svg';
import {AccountAlertState as AlertState} from "./types";

const Account = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [alertState, setAlertState] = useState(AlertState.None);

    const handlePasswordClick = useCallback((_event: MouseEvent<HTMLElement>)=>{
        setShowPassword(!showPassword);
    },[showPassword]);
    const handleSaveClick = useCallback((_event: MouseEvent<HTMLButtonElement>)=>{
        setAlertState(AlertState.Success);
    },[alertState]);
    const handleAlertClick = useCallback((_event: MouseEvent<HTMLElement>)=>{
      setAlertState(AlertState.None);
    },[alertState]);

    return (
        <div className="account__widjet">
          <aside className={cn('account__alert', {
            account__alert_hidden: alertState === AlertState.None,
            })}>
            <Alert
              icon = {successIconPath}
              onClick={handleAlertClick}>
              {alertState === AlertState.Success? "Saved": "Error" }
            </Alert>
          </aside>
          <div className="account__header">
            <LinkButton>{"< Back"}</LinkButton>
            <UserIcon name="igor" url="https://picsum.photos/200" hasChange />
            <LinkButton>Log out</LinkButton>
          </div>
          <form className="account_main">
            <div className="account__fields">
              <Input labelText="username" />
              <Input labelText="first name" />
              <Input labelText="e-mail" />
              <Input labelText="last name" />
              <Input labelText="phone #"/>
              <Input labelText="display name"/>
            </div>
            <div className="delimiter"></div>
            <div className={cn('account__fields', {
              account__fields_hidden: !showPassword,
              })}>
              <Input labelText="old password" />
              <Input labelText="new password" />
            </div>
            <div  className="account__password_link">
              <LinkButton onClick={handlePasswordClick}>
                {showPassword? "Do not change password": "Change password"}
              </LinkButton>
            </div>
            <div className="account__save_button">
              <Button  onClick={handleSaveClick} >Save changes</Button>
            </div>
          </form>
        </div>
    );
}

export default Account;