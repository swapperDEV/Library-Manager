import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  creator: string;
  rentedBy?: string;
}

const bookSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    rentedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IBook>("Book", bookSchema);
