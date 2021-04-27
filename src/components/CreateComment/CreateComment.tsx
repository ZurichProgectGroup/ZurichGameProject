import React, { FormEvent, useCallback, useState } from 'react';
import './CreateComment.css';
import cn from 'classnames';
import { Textarea, Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from 'store/topic';
import { selectTopic } from 'selectors';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import type { Props } from './types';

const CreateComment = ({ parentId }: Props) => {
    const { topic: { id: topicId } } = useSelector(selectTopic);
    const [text, setText] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const dispatch = useDispatch();

    const addEmoji = useCallback(
        ({ native }) => {
            setText(`${text}${native}`);
        },
        [text, setText],
    );

    const onTextChange = useCallback(
        ({ target: { value } }) => {
            setText(value);
        },
        [setText],
    );

    const toggleEmoji = useCallback(
        () => {
            setShowEmoji(!showEmoji);
        },
        [setShowEmoji, showEmoji],
    );

    const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(createComment({
            text,
            parentId,
            topicId,
        }));
    }, [text, parentId, topicId]);

    return (
        <form className="create-comment" onSubmit={onSubmit}>
            <div className="create-comment__text">
                <Textarea value={text} label="Написать комментарий:" onChange={onTextChange} name="text" />
                <div className={
                    cn('create-comment__emoji', {
                        'create-comment__emoji_show': showEmoji,
                    })
                }
                >
                    <Picker theme="dark" onSelect={addEmoji} />
                </div>
            </div>
            <Button type="submit" className="create-comment__btn">
                Отправить
            </Button>
            <Button onClick={toggleEmoji} type="button" className="create-comment__btn">
                Emojis
            </Button>
        </form>
    );
};

export default CreateComment;
