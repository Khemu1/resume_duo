import { Router } from "express";

const resumeRouter = Router();

resumeRouter.post("/add-resume");
resumeRouter.patch("/edit-resume");
resumeRouter.delete("/delete-resume");

export default resumeRouter;
