import { model, Schema, Types, Document, models } from "mongoose";

export interface Ivote {
  author: Types.ObjectId;
  typeId: Types.ObjectId;
  type: "question" | "answer";
  voteType: "upvote" | "downvote";
}

export interface IvoteDoc extends Ivote, Document {}

const VoteSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    typeId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    type: {
      type: String,
      enum: ["question", "answer"],
      required: true,
    },
    voteType: {
      type: String,
      enum: ["upvote", "downvote"],
      required: true,
    },
  },
  { timestamps: true }
);

VoteSchema.index({ author: 1, typeId: 1, type: 1 }, { unique: true });

const Vote = models?.Vote || model<Ivote>("Vote", VoteSchema);

export default Vote;
