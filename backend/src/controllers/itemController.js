"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemWithID = exports.getItems = void 0;
var ItemModel_1 = __importDefault(require("../models/ItemModel"));
exports.getItems = function (req, res) {
    var _a;
    var page = req.query.page || 1;
    var searchString = ((_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString()) || "";
    var filter;
    if (req.query.land) {
        filter = {
            Land: { $regex: new RegExp(req.query.land.toString(), "i") },
            $text: { $search: searchString },
        };
    }
    else {
        filter = {};
    }
    // const sortOn: any = req.query.sort;
    ItemModel_1.default.find(filter, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    })
        .sort("Varenummer")
        .skip((page - 1) * 20)
        .limit(20);
};
exports.getItemWithID = function (req, res) {
    var item = ItemModel_1.default.findById(req.params.Varenummer, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
