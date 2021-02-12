import React from 'react';
import './Forum.css';
import NavigationList from 'Components/NavigationList';
import Post from 'Components/Post';
import CreateComment from 'Components/CreateComment';
import CommentList from 'Components/CommentList';
import { theme } from 'Mocks/forum';
import RouteMap from './const';

const Forum = () => (
    <div className="forum">
        <header className="forum-page__header forum__header">
            <NavigationList routes={RouteMap} />
        </header>
        <div className="forum__post">
            <Post post={theme} />
        </div>
        <div className="forum__create-comment">
            <CreateComment onSubmit={() => {}} />
        </div>
        <div className="forum__comment-list">
            <CommentList comments={theme.comments} />
        </div>
    </div>
);

export default Forum;
