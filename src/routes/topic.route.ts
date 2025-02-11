import TopicController from "../controllers/client/topic.controller";
import express, { Router } from "express";
const router: Router = express.Router();
router.get("/home", TopicController.index);
export default router;
