import BaseService from './BaseService';
import FeedBackModel from '../models/mongo/FeedBackModel';
import {IFeedback} from '../models/mongo/IFeedBackModel';

export default class FeedbackService implements BaseService {
    public static create = async (data: IFeedback) => {
        const feedback = new FeedBackModel(data);
        return feedback.save();
    }

    public static getAll = async() => {
        return FeedBackModel.find({});
    }

}
