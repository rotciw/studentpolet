import express, { Application, Request, Response } from "express";
import cors from "cors";
import connect from "./connect";
import bodyParser from "body-parser";
import routes from "../src/routes/itemRoutes";

const app: Application = express();
const PORT = 8000 || process.env.PORT;

// mongoose connection
const db = "mongodb://localhost:27017/test";
connect(db);

// express
app.use(cors());
app.get("/", (req: Request, res: Response) =>
  res.send(`Node and express server running on ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes(app);
