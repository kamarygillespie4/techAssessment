const { Schema, model } = require("mongoose");

// Schema to create useer model
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      //Must match a valid email address =
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/],
    },
    password: {
      type: String,
      required: true,
    },
  },

  //schema settings
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", userSchema);

module.exports = User;
