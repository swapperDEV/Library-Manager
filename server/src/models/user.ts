import mongoose, { Schema, Document } from "mongoose";
import { IBook } from "./book";

interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  cardId?: string;
  library: string;
  role: string;
  rentedBooks: Array<IBook>;
}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cardId: {
    type: String,
    required: false,
  },
  library: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  rentedBooks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

export default mongoose.model<IUser>("User", userSchema);
