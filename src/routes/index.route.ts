import { Application, Request, Response } from "express";
function router(app: Application): void {
  app.use("/", (req: Request, res: Response) => {
    res.send("Hello World");
  });
}
export default router;
