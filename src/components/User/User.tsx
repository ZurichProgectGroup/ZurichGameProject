import React from 'react';
import Avatar from 'Components/Avatar';
import type { OwnProps as Props } from './types';
import './User.css';

const User = ({ user }: Props) => (
    <div className="user">
        <div className="user__avatar">
            <Avatar
                name={user.userName}
                url={user.imgUrl || undefined}
                hideBorder
                size="super-small"
            />
        </div>
        <span className="user__name">{user.userName}</span>
    </div>
);

export default User;
