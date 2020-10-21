"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var connect_1 = __importDefault(require("./connect"));
var body_parser_1 = __importDefault(require("body-parser"));
var itemRoutes_1 = __importDefault(require("../src/routes/itemRoutes"));
var app = express_1.default();
var PORT = 8000 || process.env.PORT;
// mongoose connection
var db = "mongodb://localhost:27017/test";
connect_1.default(db);
// express
app.use(cors_1.default());
app.get("/", function (req, res) {
    return res.send("Node and express server running on " + PORT);
});
app.listen(PORT, function () { return console.log("Your server is running on port " + PORT); });
// bodyparser setup
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
itemRoutes_1.default(app);
