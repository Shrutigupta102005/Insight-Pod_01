import { Router } from "express";
const langflowRouter = Router();
import isAuthenticated from "../middlewares/auth.js";
import { fetchFact, fetchQuiz, fetchSummary } from "../controllers/langflow.controller.js";

langflowRouter.post("/facts", isAuthenticated, fetchFact);
langflowRouter.post("/quiz", isAuthenticated, fetchQuiz);
langflowRouter.post("/summary", isAuthenticated, fetchSummary);
export default langflowRouter;