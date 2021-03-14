import mongoose from 'mongoose';
import {
    IFeedbackModel,
    IFeedbackDocument,
} from './IFeedBackModel';

const feedBackSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    title: {
        type:String,
        required: true,
    },
    feedback: {
        type:String,
        required: true,
    },

})

const FeedbackModel = mongoose.model<IFeedbackDocument, IFeedbackModel>('Feedback', feedBackSchema)

export default FeedbackModel;
