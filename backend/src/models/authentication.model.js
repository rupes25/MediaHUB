const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [5, "Full name must contain at least 5 characters"],
      maxlength: [50, "Full name should not contain more than 50 characters"],
      match: [
        /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
        "Full name can contain only letters and spaces",
      ],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },

    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      lowercase: true,
      minlength: [5, "Username must contain at least 5 characters"],
      maxlength: [20, "Username should not contain more than 20 characters"],
      unique: true,
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Username can contain only letters, numbers and underscore",
      ],
    },

    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must contain at least 8 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("authentication", userSchema);

module.exports = userModel;