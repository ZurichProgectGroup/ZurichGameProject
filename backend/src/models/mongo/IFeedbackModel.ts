import mongoose from 'mongoose';

export interface IFeedback {
  title: string;
  description: string;
  email:string;
}

export interface IFeedbackDocument extends mongoose.Document {
  title: string;
  description: string;
  email:string;
}

export interface IFeedbackModel extends mongoose.Model<IFeedbackDocument> {
  build(attr: IFeedback): IFeedbackDocument
}
