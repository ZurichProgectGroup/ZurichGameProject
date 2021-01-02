import React, { useState, useCallback } from 'react';
import './Account.css';
import Input from 'Components/Input';
import Button from 'Components/Button';
import LinkButton from 'Components/LinkButton';
import ActionLink from 'Components/ActionLink';
import Avatar from 'Components/Avatar';
import Alert from 'Components/Alert';
import cn from 'classnames';
import successIconPath from 'Images/success-icon.svg';
import AlertState from "./types";

const Account = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [alertState, setAlertState] = useState(AlertState.None);

    const handlePasswordClick = useCallback(()=>{
        setShowPassword(!showPassword);
    },[showPassword]);
    const handleSaveClick = useCallback(()=>{
        setAlertState(AlertState.Success);
    },[alertState]);
    const handleAlertClick = useCallback(()=>{
    setAlertState(AlertState.None);
    },[alertState]);
    const handleLogOutClick = useCallback(()=>{
        //setShowPassword(!showPassword);
    },[showPassword]);

    return (
        <div className="account__widjet">
          <aside className={ cn('account__alert',
                alertState === AlertState.None ? 'account__alert_hidden': '')
            }>
            <Alert
              icon = {successIconPath}
              onClick={handleAlertClick}>
              {alertState === AlertState.Success? "Saved": "Error" }
            </Alert>
          </aside>
          <div className="account__header">
              <LinkButton to="/">
                  {'< Back'}
              </LinkButton>
            <Avatar name="igor" url="https://picsum.photos/200" hasChange />
            <ActionLink onClick={handleLogOutClick}>Log out</ActionLink>
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
            <div className={cn('account__fields',
                !showPassword ? 'account__fields_hidden': '')
            }>
              <Input labelText="old password" />
              <Input labelText="new password" />
            </div>
            <div  className="account__password_link">
              <ActionLink onClick={handlePasswordClick}>
                {showPassword? "Do not change password": "Change password"}
              </ActionLink>
            </div>
            <div className="account__save_button">
              <Button  onClick={handleSaveClick} >Save changes</Button>
            </div>
          </form>
        </div>
    );
};

export default Account;
