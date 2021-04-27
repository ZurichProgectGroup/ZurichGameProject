import React, { useState, useMemo, useCallback } from 'react';
import './Comment.css';
import InlineDotedList from 'components/InlineDotedList';
import cn from 'classnames';
import User from 'components/User';
import LinkButton from 'components/LinkButton';
import CommentList from 'components/CommentList';
import CreateComment from 'components/CreateComment';
import ToggleButton from 'components/ToggleButton';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { getReplies } from 'store/topic';
import type { Props } from './types';

const Comment = ({
    comment: {
        id,
        repliesCount,
        author,
        createdAt,
        text,
        children,
    },
}: Props) => {
    const dispatch = useDispatch();
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [isAnswerOpen, setIsAnswerOpen] = useState(false);
    const hasAnswers = useMemo(() => Boolean(repliesCount), [repliesCount]);

    const handleToggleAnswers = useCallback(() => setIsAnswerOpen(!isAnswerOpen), [isAnswerOpen]);
    const handleToggleComments = useCallback(
        async () => {
            if (!isCommentsOpen && (!children || !children.length)) {
                await dispatch(getReplies(id));
            }

            setIsCommentsOpen(!isCommentsOpen);
        },
        [isCommentsOpen, children],
    );

    return (
        <div className="comment">
            <div className="comment__block">
                <div className="comment__header">
                    <div className="comment__author">
                        <InlineDotedList>
                            <InlineDotedList.Item>
                                <User user={author} />
                            </InlineDotedList.Item>
                            <InlineDotedList.Item>
                                {dayjs(createdAt).format('D MMM YYYY')}
                            </InlineDotedList.Item>
                        </InlineDotedList>
                    </div>
                    <LinkButton
                        className={cn('comment__answer-btn', {
                            'comment__answer-btn_open': isAnswerOpen,
                        })}
                        type="button"
                        isButton
                        onClick={handleToggleAnswers}
                    >
                        <span className="material-icons">
                            {isAnswerOpen ? 'close' : 'chat_bubble_outline'}
                        </span>
                        <span>{isAnswerOpen ? 'Не отвечать' : 'Ответить'}</span>
                    </LinkButton>
                </div>
                <p className="comment__text">
                    {text}
                </p>
            </div>
            <div className={cn('comment__answers', {
                'comment__answers_has-comment': hasAnswers,
            })}
            >
                {
                    hasAnswers && (
                        <ToggleButton
                            isOpen={isCommentsOpen}
                            onClick={handleToggleComments}
                            className="comment__answer-toggle"
                        >
                            {!isAnswerOpen && `${repliesCount} комментариев`}
                        </ToggleButton>
                    )
                }
                {
                    isAnswerOpen && (
                        <div className="comment__create">
                            <CreateComment parentId={id} />
                        </div>
                    )
                }
                {
                    isCommentsOpen && hasAnswers && (
                        <div className="comment__answers-list">
                            <CommentList comments={children || []} hideTitle />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Comment;
