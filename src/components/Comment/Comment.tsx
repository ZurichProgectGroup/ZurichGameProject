import React, { useState, useMemo, useCallback } from 'react';
import './Comment.css';
import InlineDotedList from 'Components/InlineDotedList';
import cn from 'classnames';
import User from 'Components/User';
import LinkButton from 'Components/LinkButton';
import CommentList from 'Components/CommentList';
import CreateComment from 'Components/CreateComment';
import ToggleButton from 'Components/ToggleButton';
import type { Props } from './types';

const Comment = ({ comment }: Props) => {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [isAnswerOpen, setIsAnswerOpen] = useState(false);

    const isAnswer = useMemo(() => comment.answers === undefined, [comment.answers]);
    const hasAnswers = useMemo(() => Boolean(comment.answers?.length), [comment.answers]);

    const handleToggleAnswers = useCallback(() => setIsAnswerOpen(!isAnswerOpen), [isAnswerOpen]);
    const handleToggleComments = useCallback(
        () => setIsCommentsOpen(!isCommentsOpen),
        [isCommentsOpen],
    );

    return (
        <div className="comment">
            <div className="comment__block">
                <div className="comment__header">
                    <div className="comment__author">
                        <InlineDotedList>
                            <InlineDotedList.Item>
                                <User user={comment.author} />
                            </InlineDotedList.Item>
                            <InlineDotedList.Item>
                                {comment.date}
                            </InlineDotedList.Item>
                        </InlineDotedList>
                    </div>
                    <LinkButton
                        className={cn('comment__answer-btn', {
                            'comment__answer-btn_open': isAnswerOpen,
                            'comment__answer-btn_hide': isAnswer,
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
                    {comment.message}
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
                            {!isAnswerOpen && `${comment.answers?.length} комментариев`}
                        </ToggleButton>
                    )
                }
                {
                    isAnswerOpen && (
                        <div className="comment__create">
                            <CreateComment />
                        </div>
                    )
                }
                {
                    isCommentsOpen && hasAnswers && (
                        <div className="comment__answers-list">
                            <CommentList comments={comment.answers || []} hideTitle />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Comment;
