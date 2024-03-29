import React, {
    ChangeEvent,
    useState,
    useCallback,
    useEffect,
} from 'react';
import cn from 'classnames';
import getInputImgUrl from 'utils/getInputImageUrl';
import type { Props } from './types';
import './Avatar.css';

const Avatar = (props: Props) => {
    const {
        name,
        url,
        hasChange,
        onChange,
        size,
        hideBorder,
    } = props;

    const [avatar, setAvatar] = useState(url);

    useEffect(() => {
        setAvatar(props.url);
    }, [url]);

    const handleChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        try {
            const imageUrl = await getInputImgUrl(input);
            setAvatar(imageUrl);
            if (onChange && input.files) {
                onChange(imageUrl, input.files[0]);
            }
        } catch (e) {
            throw new Error(e);
        }
    }, [onChange]);

    return (
        <div className={cn('avatar', {
            avatar_small: size === 'small',
            avatar_medium: size === 'medium',
            'avatar_super-small': size === 'super-small',
            'avatar_no-border': Boolean(hideBorder),
        })}
        >
            <span className="avatar__letter">{name[0]}</span>
            {
                url && (
                    <div className="avatar__image-wrapper">
                        <img src={avatar} alt={name} className="avatar__image" />
                    </div>
                )
            }
            {
                hasChange && (
                    <label className="avatar__image-upload">
                        <input type="file" onChange={handleChange} accept="image/jpeg,image/png,image/gif" />
                    </label>
                )
            }
        </div>
    );
};

export default Avatar;
