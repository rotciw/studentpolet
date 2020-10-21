import { getItemWithID, getItems } from "../controllers/itemController";
import { Application } from "express";

const routes = (app: Application) => {
  app.get("/items", getItems)
  app.get("/items/:itemID", getItemWithID)
};

// Eks. på put og delete
// app
// .route("/items/:itemID")
// .get(getItemWithID)
// .put((req, res) => res.send("PUT request succesful!"))
// .delete((req, res) => res.send("DELETE request succesful!"));

export default routes;
