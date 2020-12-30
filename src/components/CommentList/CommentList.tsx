import React from 'react';
import './CommentList.css';
import Comment from 'Components/Comment';
import type { Props } from './types';

const CommentList = ({ comments, hideTitle } : Props) => (
    <div className="comment-list">
        {
            !hideTitle && (
                <b className="comment-list__title">
                    {`Комментарии (${comments.length}):`}
                </b>
            )
        }
        <div className="comment-list__items">
            {
                comments.map((comment) => (
                    <div className="comment-list__item" key={`comments_${comment.id}`}>
                        <Comment comment={comment} />
                    </div>
                ))
            }
        </div>
    </div>
);

export default CommentList;
