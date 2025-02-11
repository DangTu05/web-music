import { Application, Request, Response } from "express";
import Topic from "../models/topic.model";
function router(app: Application): void {
  app.use("/", async (req: Request, res: Response) => {
    const topics = await Topic.find({
      deleted: false,
    });
    console.log(topics);
  });
}
export default router;
