import express from "express";
import { buyPlan, cancelPlan, register } from "../controllers/controller.js";
const userRoute=express.Router();

userRoute.post('/register',register);
userRoute.post('/buyplan',buyPlan);
userRoute.post('/cancelplan',cancelPlan)

export default userRoute;