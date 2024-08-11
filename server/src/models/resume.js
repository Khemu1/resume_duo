import mongoose from "mongoose";

const resumeSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "username is already taken"],
  },
  password: { type: String, required: true },
});

const Resume = mongoose.model("Resume", userSchema);

export default Resume;
