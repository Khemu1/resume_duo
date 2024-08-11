import { Router } from "express";
import { formValidation } from "../middlewares/formValidation.js";
import { validateCurrentUser } from "../middlewares/uservalidation.js";

import { login, register } from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.get("/validate-current-user", validateCurrentUser);
userRouter.post("/register", formValidation, register);

export default userRouter;
