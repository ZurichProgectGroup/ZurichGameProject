import React from 'react';
import InlineDotedList from 'Components/InlineDotedList';
import User from 'Components/User';
import './Post.css';
import dayjs from 'dayjs';
import { Props } from './types';

const Post = ({ post } : Props) => (
    <div className="post">
        <b className="post__title">{post.title}</b>
        <p className="post__description">
            {post.content}
        </p>
        <div className="post__author">
            <InlineDotedList>
                <InlineDotedList.Item>
                    <User user={post.author} />
                </InlineDotedList.Item>
                <InlineDotedList.Item>
                    {dayjs(post.createdAt).format('D MMM YYYY')}
                </InlineDotedList.Item>
            </InlineDotedList>
        </div>
    </div>
);

export default Post;
