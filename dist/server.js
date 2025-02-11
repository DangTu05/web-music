"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const mongodb_config_1 = require("./config/mongodb.config");
const errorHandling_middleware_1 = require("./middlewares/errorHandling.middleware");
const app = (0, express_1.default)();
const port = 3000;
const startServer = () => {
    /// Kết nối db
    (0, mongodb_config_1.connect)();
    // Sử dụng body-parser middleware
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    /// Cors
    app.use((0, cors_1.default)());
    /// Kết nối router
    (0, index_route_1.default)(app);
    /// Middleware xử lý lỗi tập chung
    app.use(errorHandling_middleware_1.errorHandlingMiddleware);
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`Server is running at http://localhost:${port}`);
    });
};
startServer();
