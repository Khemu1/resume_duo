import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "username is already taken"],
  },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
