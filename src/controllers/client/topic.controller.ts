import { Request, Response } from "express";
class TopicController {
  async index(req: Request, res: Response) {
    res.render("./client/pages/topics/index", {
      pageTitle: "Chủ đề bài hát",
    });
  }
}
export default new TopicController();
