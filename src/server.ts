import express, { Express } from "express";
import path from "path";
import cors from "cors";
import router from "./routes/index.route";
import { connect } from "./config/mongodb.config";
import { errorHandlingMiddleware } from "./middlewares/errorHandling.middleware";
import configViewEngine from "./config/viewEngine.config";
const app: Express = express();
const port: number = 8080;
const startServer = (): void => {
  /// Kết nối db
  connect();
  app.use(express.static(path.join(__dirname, "public")));
  // Sử dụng body-parser middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  /// Cors
  app.use(cors());
  /// Kết nối router
  /// config viewEngine
  configViewEngine(app);
  router(app);
  /// Middleware xử lý lỗi tập chung
  app.use(errorHandlingMiddleware);
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running at http://localhost:${port}`);
  });
};
startServer();
