import { Router } from "express";
import { addResume, editResume, deleteResume } from "../controllers/resume.js";
import { authenticateToken } from "../middlewares/token_validation.js";

const resumeRouter = Router();

resumeRouter.post("/add-resume", authenticateToken, addResume);
resumeRouter.patch("/edit-resume/:id", authenticateToken, editResume);
resumeRouter.delete("/delete-resume/:id", authenticateToken, deleteResume);

export default resumeRouter;
