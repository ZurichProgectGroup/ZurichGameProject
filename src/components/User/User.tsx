import React from 'react';
import Avatar from 'components/Avatar';
import type { OwnProps as Props } from './types';
import './User.css';

const User = ({ user }: Props) => (
    <div className="user">
        <div className="user__avatar">
            <Avatar
                name={user?.name || ''}
                url={user?.avatar || undefined}
                hideBorder
                size="super-small"
            />
        </div>
        <span className="user__name">{user?.name}</span>
    </div>
);

export default User;
