import React, { useState, useCallback, useEffect } from 'react';
import './Account.css';
import Input from 'Components/Input';
import Button from 'Components/Button';
import LinkButton from 'Components/LinkButton';
import ActionLink from 'Components/ActionLink';
import Avatar from 'Components/Avatar';
import Alert from 'Components/Alert';
import cn from 'classnames';
import successIconPath from 'Images/success-icon.svg';
import AlertState from './types';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreCTX } from 'Store';
import { logout, updateProfile } from 'Store/account';
import AlertState from './types';

const selectUser = (state: IStoreCTX) => state.account.user;

const Account = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [alertState, setAlertState] = useState(AlertState.None);
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [avatarFile, setAvatarFile] = useState(null);

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        setFirstName(user?.firstName);
        setSecondName(user?.secondName);
        setDisplayName(user?.displayName);
        setLogin(user?.login);
        setEmail(user?.email);
        setPhone(user?.phone);
        setAvatar(user?.avatar);
    }, [user]);

    const handlePasswordClick = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword]);

    const handleSaveClick = useCallback(() => {
        dispatch(
            updateProfile({
                first_name: firstName,
                second_name: secondName,
                display_name: displayName,
                login,
                email,
                phone,
                avatarFile,
                oldPassword,
                newPassword,
            }),
        );
        setAlertState(AlertState.Success);
    }, [alertState, firstName, secondName, displayName, login, email, phone]);
    const handleAlertClick = useCallback(() => {
        setAlertState(AlertState.None);
    }, [alertState]);
    const handleLogOutClick = useCallback(() => {
        dispatch(logout());
    }, []);

    return (
        <div className="account__widjet">
            <aside className={cn('account__alert',
                alertState === AlertState.None ? 'account__alert_hidden' : '')}
            >
                <Alert
                    icon={successIconPath}
                    onClick={handleAlertClick}
                >
                    {alertState === AlertState.Success ? 'Saved' : 'Error' }
                </Alert>
            </aside>
            <div className="account__header">
                <LinkButton to="/">
                    {'< Back'}
                </LinkButton>
                <Avatar name={firstName || ''}
                    url={avatar}
                    hasChange
                    onChange={(url, file) => {
                        setAvatar(url);
                        setAvatarFile(file);
                    }} />
                <ActionLink onClick={handleLogOutClick}>Log out</ActionLink>
            </div>
            <form className="account_main">
                <div className="account__fields">
                    <Input labelText="login"
                        value={login || ''}
                        onChange={(e) => setLogin(e.target.value)} />
                    <Input labelText="first name"value={firstName || ''}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <Input labelText="e-mail"
                    value={email || ''}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        labelText="last name"
                    value={secondName || ''}
                        onChange={(e) => setSecondName(e.target.value)}
                    />
                    <Input
                        labelText="phone"
                    value={phone || ''}
                        onChange={(e) => setPhone(e.target.value)}
                    /><Input labelText="display name" value={displayName || ''}
                        onChange={(e) => setDisplayName(e.target.value)}/>
                </div>
                <div className="delimiter" />
                <div className={cn('account__fields',
                    !showPassword ? 'account__fields_hidden' : '')}
                >
                    <Input labelText="old password"
                    value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <Input
                        labelText="new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="account__password_link">
                    <ActionLink onClick={handlePasswordClick}>
                        {showPassword ? 'Do not change password' : 'Change password'}
                    </ActionLink>
                </div>
                <div className="account__save_button">
                    <Button onClick={handleSaveClick}>Save changes</Button>
                </div>
            </form>
        </div>
    );
};

export default Account;
