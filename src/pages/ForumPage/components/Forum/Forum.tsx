import React, { useEffect } from 'react';
import './Forum.css';
import NavigationList from 'components/NavigationList';
import Post from 'components/Post';
import CreateComment from 'components/CreateComment';
import CommentList from 'components/CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { selectTopic } from 'selectors';
import { getTopic } from 'store/topic';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import RouteMap from './const';

const Forum = () => {
    const dispatch = useDispatch();
    const { topic, isLoading, comments } = useSelector(selectTopic);

    const { id } = useParams<{id: string}>();

    useEffect(() => {
        dispatch(getTopic(Number(id)));
    }, [id]);

    return (
        <div className="forum">
            <header className="forum-page__header forum__header">
                <NavigationList routes={RouteMap} />
            </header>
            {
                isLoading ? <Loader />
                    : (
                        <>
                            <div className="forum__post">
                                <Post post={topic} />
                            </div>
                            <div className="forum__create-comment">
                                <CreateComment />
                            </div>
                            <div className="forum__comment-list">
                                <CommentList
                                    count={topic.commentsCount}
                                    comments={comments}
                                />
                            </div>
                        </>
                    )
            }
        </div>
    );
};

export default Forum;
