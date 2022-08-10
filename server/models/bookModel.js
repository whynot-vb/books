import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: [1, "Title must have at least 1 character"],
    maxLength: [100, "Title must have at most 100 characters"],
    trim: true,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  issn: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    enum: ["scifi", "criminal", "romance"],
    required: true,
  },
});

export default mongoose.model("Book", bookSchema);
