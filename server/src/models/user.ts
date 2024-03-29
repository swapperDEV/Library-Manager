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
    required: false,
  },
  name: {
    type: String,
    required: false,
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
  status: {
    type: String,
    required: false,
  },
  memberInfo: {
    type: {
      address: String,
      pesel: String,
      phone: String,
    },
    required: false,
  },
  rentedBooks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  required: false,
});

export default mongoose.model<IUser>("User", userSchema);
