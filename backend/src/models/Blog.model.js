const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      minlength: [5, "Title must have at least 5 characters."],
      maxlength: [50, "Title must have less than 50 characters."],
      match: [
        /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
        "Title can contain only letters and spaces.",
      ],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required."],
      minlength: [5, "Description must have at least 5 characters."],
      maxlength: [200, "Description must have less than 200 characters."],
      trim: true,
    },

    content: {
      type: String,
      required: [true, "Content is required."],
      minlength: [50, "Content must have at least 50 characters."],
      maxlength: [20000, "Content must have less than 20000 characters."],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Category is required."],
      enum: [
        "technology",
        "development",
        "cybersecurity",
        "travel",
        "personal",
      ],
    },

    author: {
      type: String,
      required: [true, "Author name is required."],
      minlength: [3, "Author must have at least 3 characters."],
      maxlength: [30, "Author must have less than 30 characters."],
      trim: true,
      match: [
        /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
        "Author can contain only letters and spaces.",
      ],
    },

    images: {
      type: [String], // Array of Cloudinary URLs
      required: [true, "Images are required."],
      validate: {
        validator: (value) => value.length >= 5,
        message: "Upload at least 5 images.",
      },
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;