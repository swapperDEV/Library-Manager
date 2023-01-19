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
    admin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ILibrary>("Library", LibrarySchema);
