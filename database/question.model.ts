import { model, Schema, Document, models, Types } from "mongoose";

export interface Iquestion {
  title: string;
  content: string;
  tags: Types.ObjectId[];
  views: number;
  upvotes: number;
  downvotes: number;
  answers: number;
  author: Types.ObjectId;
}

export interface IquestionDoc extends Iquestion, Document {}

const QuestionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: Types.ObjectId,
        ref: "Tag",
        required: true,
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
    answers: {
      type: Number,
      default: 0,
    },
    author: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Question =
  models?.Question || model<Iquestion>("Question", QuestionSchema);

export default Question;
