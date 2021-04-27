import React, { FormEvent, useCallback, useState } from 'react';
import './ForumCreate.css';
import NavigationList from 'components/NavigationList';
import LinkButton from 'components/LinkButton';
import ROUTES from 'components/App/consts';
import { Input, Textarea, Button } from 'components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createTopic } from 'store/topics';
import RouteMap from './const';

const ForumCreate = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const onTitleChange = useCallback(
        ({ target: { value } }) => {
            setTitle(value);
        },
        [setTitle],
    );

    const onContentChange = useCallback(
        ({ target: { value } }) => {
            setContent(value);
        },
        [setContent],
    );

    const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await dispatch(createTopic({
            title,
            content,
        }));

        history.push(ROUTES.forum);
    }, [title, content]);

    return (
        <>
            <div className="forum-page__header">
                <NavigationList routes={RouteMap} />
                <LinkButton to={ROUTES.forum} className="forum-create__cancel">
                    Отменить
                </LinkButton>
            </div>
            <form className="forum-create" onSubmit={onSubmit}>
                <div className="forum-create__fields">
                    <Input onChange={onTitleChange} value={title} labelText="НОВАЯ ТЕМА" />
                    <Textarea onChange={onContentChange} value={content} label="Описание" className="forum-create__text" />
                </div>
                <Button type="submit" className="forum-create__submit">Добавить тему</Button>
            </form>
        </>
    );
};

export default ForumCreate;
