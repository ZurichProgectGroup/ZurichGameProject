import BaseService from './BaseService';
import FeedBackModel from '../models/mongo/FeedbackModel';
import { IFeedback } from '../models/mongo/IFeedbackModel';

export default class FeedbackService implements BaseService {
    public static create = async (data: IFeedback) => {
        const feedback = new FeedBackModel(data);
        return feedback.save();
    };

    public static getAll = async () => FeedBackModel.find({});
}
