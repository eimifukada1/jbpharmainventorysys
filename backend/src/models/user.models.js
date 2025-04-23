const mongoose = require("mongoose");
const { Schema } = mongoose;
console.log("Attempting to require mongoose in User.model.js");
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Add other fields as needed
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema); // 'User' is the name of the model

module.exports = UserModel;
