import { Application } from "express";
import path from "path";
const configViewEngine = (app: Application) => {
  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "..", "views"));
};
export default configViewEngine;
