import Resume from "../models/resume.js";

export async function getResume(req, res) {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const id = req.params.id;
    const resumes = await Resume.findOne({ _id: id, userId: user._id });
    return res.status(200).json(resumes);
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected Error");
  }
}

export async function getAllResumes(req, res) {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const resumes = await Resume.find({ userId: user._id });
    return res.status(200).json(resumes);
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected Error");
  }
}

export async function editResume(req, res) { 
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const data = req.body.data;
    await Resume.create({ userId: user._id, ...data });

    return res.status(200).json("template Created");
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected Error");
  }
}

export async function editResume(req, res) {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const resumeId = req.params.id;
    const data = req.body.data;
    await Resume.findByIdAndUpdate(resumeId, { ...data });

    return res.status(200).json("resume Updated");
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected Error");
  }
}

export async function deleteResume(req, res) {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    await Resume.findOneAndDelete({ userId: user._id });
    return res.status(200).json("resume Deleted");
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected Error");
  }
}
