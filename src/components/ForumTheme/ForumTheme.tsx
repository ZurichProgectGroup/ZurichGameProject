import React, { useCallback } from 'react';
import cn from 'classnames';
import InlineDotedList from 'Components/InlineDotedList';
import User from 'Components/User';
import type { OwnProps as Props } from './types';
import './ForumTheme.css';

const ForumTheme = ({
    className = '',
    theme,
    onClick = () => {},
}: Props) => {
    const handleClick = useCallback(() => {
        onClick(theme.id);
    }, [theme]);

    return (
        <div className={cn('forum-theme', className)} onClick={handleClick} role="button" tabIndex={0} onKeyPress={handleClick}>
            <b className="forum-themes__title">{theme.title}</b>
            <p className="forum-themes__desc">
                {theme.desc}
            </p>
            <InlineDotedList>
                <InlineDotedList.Item>
                    <User user={theme.author} />
                </InlineDotedList.Item>
                <InlineDotedList.Item>
                    <div className="forum-themes__count">
                        <span className="material-icons">
                            chat_bubble_outline
                        </span>
                        <span>{theme.messagesCount}</span>
                    </div>
                </InlineDotedList.Item>
                {
                    theme.lastMessage && (
                        <InlineDotedList.Item>
                            последнее сообщение:
                            {' '}
                            <span className="forum-themes__name">
                                {theme.lastMessage.userName}
                            </span>
                            {' '}
                            {theme.lastMessage.date}
                        </InlineDotedList.Item>
                    )
                }
            </InlineDotedList>
        </div>
    );
};

export default ForumTheme;
