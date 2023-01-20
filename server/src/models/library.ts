import mongoose, { Schema, Document } from "mongoose";

interface ILibrary extends Document {
  name: string;
  admin: string;
}

const LibrarySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    coords: {
      type: [Number],
      required: true,
    },
    adminName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ILibrary>("Library", LibrarySchema);
