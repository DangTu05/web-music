import { Application } from "express";
import topicRouter from "./topic.route";
function router(app: Application): void {
  app.use("/", topicRouter);
}
export default router;
