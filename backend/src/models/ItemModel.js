"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ItemSchema = new mongoose_1.default.Schema({
    Varenummer: { type: String, index: true },
    Varenavn: { type: String, index: true },
    Volum: String,
    Pris: Number,
    Literpris: String,
    Varetype: String,
    Produktutvalg: String,
    Fylde: String,
    Friskhet: String,
    Garvestoffer: String,
    Bitterhet: String,
    Sodme: String,
    Smak: String,
    Land: String,
    Argang: String,
    Rastoff: String,
    Alkohol: Number,
    AlkoholPrKrone: Number,
    Emballasjetype: String,
    Vareurl: String,
});
// ItemSchema.index({ "Varenummer": "text" });
// For all fields
// ItemSchema.index({ "$**": "text" });
var Item = mongoose_1.default.model("Products", ItemSchema);
exports.default = Item;
