import React, { FormEvent, useCallback } from 'react';
import './CreateComment.css';
import Textarea from 'Components/Textarea';
import Button from 'Components/Button';
import type { Props } from './types';

const CreateComment = ({ value, onChange, onSubmit }: Props) => {
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(e);
    }, [onSubmit]);

    return (
        <form className="create-comment" onSubmit={handleSubmit}>
            <div className="create-comment__text">
                <Textarea value={value} label="Написать комментарий:" onChange={onChange} name="comment" />
            </div>
            <Button type="submit" className="create-comment__btn">
                Отправить
            </Button>
        </form>
    );
};

export default CreateComment;
