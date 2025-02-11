"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function router(app) {
    app.use("/", (req, res) => {
        res.send("Hello World");
    });
}
exports.default = router;
