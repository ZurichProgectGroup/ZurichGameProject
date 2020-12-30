import React from 'react';
import InlineDotedList from 'Components/InlineDotedList';
import User from 'Components/User';
import './Post.css';
import { Props } from './types';

const Post = ({ post } : Props) => (
    <div className="post">
        <b className="post__title">{post.title}</b>
        <p className="post__description">
            {post.desc}
        </p>
        <div className="post__author">
            <InlineDotedList>
                <InlineDotedList.Item>
                    <User user={post.author} />
                </InlineDotedList.Item>
                <InlineDotedList.Item>
                    {post.uploadDate}
                </InlineDotedList.Item>
            </InlineDotedList>
        </div>
    </div>
);

export default Post;
