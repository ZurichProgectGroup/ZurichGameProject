import React, { ChangeEvent, useState } from 'react';
import cn from 'Utils/classnames';
import getInputImgUrl from 'Utils/getInputImageUrl';
import { Props } from './types';
import './UserIcon.css';

const UserIcon: Props = (props) => {
    const {
        name,
        url,
        hasChange,
        onChange,
        size,
    } = props;

    const [avatar, setAvatar] = useState(url);

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        try {
            const imageUrl = await getInputImgUrl(input);
            setAvatar(imageUrl);
            if (onChange) {
                onChange(imageUrl);
            }
        } catch (e) {
            throw new Error(e);
        }
    };

    return (
        <div className={cn('user-icon', {
            'user-icon_small': size === 'small',
            'user-icon_medium': size === 'medium',
        })}
        >
            <span className="user-icon__letter">{name[0]}</span>
            {
                url && (
                    <div className="user-icon__image-wrapper">
                        <img src={avatar} alt={name} className="user-icon__image" />
                    </div>
                )
            }
            {
                hasChange && (
                    <label className="user-icon__image-upload">
                        <input type="file" onChange={handleChange} />
                    </label>
                )
            }
        </div>
    );
};

export default UserIcon;
