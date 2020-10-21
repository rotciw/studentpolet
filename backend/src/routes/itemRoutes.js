"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itemController_1 = require("../controllers/itemController");
var routes = function (app) {
    app.get("/items", itemController_1.getItems);
    app.get("/items/:itemID", itemController_1.getItemWithID);
};
// Eks. på put og delete
// app
// .route("/items/:itemID")
// .get(getItemWithID)
// .put((req, res) => res.send("PUT request succesful!"))
// .delete((req, res) => res.send("DELETE request succesful!"));
exports.default = routes;
