import React, { useState, useCallback, useEffect } from 'react';
import './Account.css';
import {
    Input, Button, LinkButton, ActionLink, Avatar, Alert,
} from 'Components';
import cn from 'classnames';
import successIconPath from 'Images/success-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateProfile } from 'Store/account';
import { selectUser } from 'Selectors';
import { Redirect } from 'react-router-dom';
import ROUTES from 'Components/App/consts';
import { LoadingStatus } from 'Types/common';
import AlertState from './types';

const Account = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [alertState, setAlertState] = useState(AlertState.None);
    const [avatarFile, setAvatarFile] = useState(null);

    const [profile, setProfile] = useState({
        login: '',
        firstName: '',
        secondName: '',
        displayName: '',
        email: '',
        phone: '',
        oldPassword: '',
        newPassword: '',
        avatar: null,
    });

    const onFieldChange = useCallback(
        (key) => ({ target: { value } }) => {
            setProfile((prevProfile) => ({
                ...prevProfile,
                [key]: value,
            }));
        },
        [setProfile],
    );

    const onAvatarChange = useCallback(
        (url, file) => {
            setProfile((prevProfile) => ({
                ...prevProfile,
                avatar: url,
            }));
            setAvatarFile(file);
        },
        [setAvatarFile],
    );

    const dispatch = useDispatch();

    const { user, status } = useSelector(selectUser);

    if (status === LoadingStatus.failed || (status === LoadingStatus.succeeded && !user)) {
        return (<Redirect to={ROUTES.login} />);
    }

    useEffect(() => {
        setProfile({ ...user, oldPassword: '', newPassword: '' });
    }, [user]);

    const handlePasswordClick = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword]);

    const handleSaveClick = useCallback(() => {
        const {
            firstName,
            secondName,
            displayName,
            login,
            email,
            phone,
            oldPassword,
            newPassword,
        } = profile;

        dispatch(
            updateProfile({
                first_name: firstName,
                second_name: secondName,
                display_name: displayName,
                login,
                email,
                phone,
                oldPassword,
                newPassword,
                avatarFile,
            }),
        );
        setAlertState(AlertState.Success);
    }, [alertState, profile]);

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
                <Avatar
                    name={profile.firstName || ''}
                    url={profile.avatar}
                    hasChange
                    onChange={onAvatarChange}
                />
                <ActionLink onClick={handleLogOutClick}>Log out</ActionLink>
            </div>
            <form className="account_main">
                <div className="account__fields">
                    <Input
                        labelText="login"
                        value={profile.login || ''}
                        onChange={onFieldChange('login')}
                    />
                    <Input
                        labelText="first name"
                        value={profile.firstName || ''}
                        onChange={onFieldChange('firstName')}
                    />
                    <Input
                        labelText="e-mail"
                        value={profile.email || ''}
                        onChange={onFieldChange('email')}
                    />
                    <Input
                        labelText="last name"
                        value={profile.secondName || ''}
                        onChange={onFieldChange('secondName')}
                    />
                    <Input
                        labelText="phone"
                        value={profile.phone || ''}
                        onChange={onFieldChange('phone')}
                    />
                    <Input
                        labelText="display name"
                        value={profile.displayName || ''}
                        onChange={onFieldChange('displayName')}
                    />
                </div>
                <div className="delimiter" />
                <div className={cn('account__fields',
                    !showPassword ? 'account__fields_hidden' : '')}
                >
                    <Input
                        labelText="old password"
                        value={profile.oldPassword}
                        onChange={onFieldChange('oldPassword')}
                    />
                    <Input
                        labelText="new password"
                        value={profile.newPassword}
                        onChange={onFieldChange('newPassword')}
                    />
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
