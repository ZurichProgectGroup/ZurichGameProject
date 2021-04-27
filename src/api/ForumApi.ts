import { StringKeyString } from 'Utils/custom_types';
import type { Topic, TopicWithComments } from 'Types/ForumTopic';
import type { CommentCreate, Comment } from 'Types/Comment';
import { topicsTransportInstance, commentsTransportInstance } from './TransportInstances';

export default class ForumApi {
    static getTopics(): Promise<Topic[]> {
        return topicsTransportInstance.get('/');
    }

    static createTopic(data: StringKeyString) {
        return topicsTransportInstance.post('/', { data });
    }

    static getTopic(id: number): Promise<TopicWithComments> {
        return topicsTransportInstance.get(`/${id}`);
    }

    static createComment(data: CommentCreate) {
        return commentsTransportInstance.post('/', { data });
    }

    static getReplies(id: number): Promise<Comment[]> {
        return commentsTransportInstance.get(`/${id}`);
    }
}
