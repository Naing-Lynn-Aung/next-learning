import { model, Schema, Types, Document, models } from "mongoose";

export interface Iaccount {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password: string;
  provider: string;
  providerAccountId: string;
}

export interface IaccountDoc extends Iaccount, Document {}

const AccountSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    providerAccountId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Account = models?.Account || model<Iaccount>("Account", AccountSchema);

export default Account;
