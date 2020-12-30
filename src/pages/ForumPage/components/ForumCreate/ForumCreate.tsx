import React, { FormEvent, useCallback } from 'react';
import './ForumCreate.css';
import NavigationList from 'Components/NavigationList';
import LinkButton from 'Components/LinkButton';
import ROUTES from 'Components/App/consts';
import Input from 'Components/Input';
import Textarea from 'Components/Textarea';
import Button from 'Components/Button';
import RouteMap from './const';

const ForumCreate = () => {
    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, []);

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
                    <Input labelText="НОВАЯ ТЕМА" name="theme" />
                    <Textarea label="Описание" className="forum-create__text" />
                </div>
                <Button type="submit" className="forum-create__submit">Добавить тему</Button>
            </form>
        </>
    );
};

export default ForumCreate;
