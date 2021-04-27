import React from 'react';
import cn from 'classnames';
import dayjs from 'dayjs';
import InlineDotedList from 'Components/InlineDotedList';
import User from 'Components/User';
import type { OwnProps as Props } from './types';
import './ForumTopic.css';

const ForumTopic = ({
    className = '',
    theme,
    onClick = () => {},
}: Props) => (
    <div className={cn('forum-theme', className)} onClick={onClick} role="button" tabIndex={0} onKeyPress={onClick}>
        <b className="forum-themes__title">{theme.title}</b>
        <p className="forum-themes__desc">
            {theme.content}
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
                    <span>{theme.commentsCount}</span>
                </div>
            </InlineDotedList.Item>
            <InlineDotedList.Item>
                {dayjs(theme.createdAt).format('D MMM YYYY')}
            </InlineDotedList.Item>
        </InlineDotedList>
    </div>
);

export default ForumTopic;
