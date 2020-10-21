import mongoose, { Schema, Document } from "mongoose";

export interface ItemInterface extends Document {
  Varenummer: string;
  Varenavn: string;
  Volum: string;
  Pris: number;
  Literpris: string;
  Varetype: string;
  Produktutvalg: string;
  Fylde: string;
  Friskhet: string;
  Garvestoffer: string;
  Bitterhet: string;
  Sodme: string;
  Smak: string;
  Land: string;
  Argang: string;
  Rastoff: string;
  Alkohol: number;
  AlkoholPrKrone: number;
  Emballasjetype: string;
  Vareurl: string;
}

const ItemSchema = new mongoose.Schema({
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
const Item = mongoose.model<ItemInterface>("Products", ItemSchema);

export default Item;
