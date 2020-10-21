import { Request, Response } from "express";
import Item from "../models/ItemModel";

export const getItems = (req: Request, res: Response) => {
  const page: any = req.query.page || 1;
  const searchString: string = req.query.search?.toString() || "";
  let filter: object;
  if (req.query.land) {
    filter = {
      Land: { $regex: new RegExp(req.query.land.toString(), "i") },
      $text: { $search: searchString },
    };
  } else {
    filter = {};
  }
  // const sortOn: any = req.query.sort;
  Item.find(filter, (err, item) => {
    if (err) {
      res.send(err);
    }
    res.json(item);
  })
    .sort("Varenummer")
    .skip((page - 1) * 20)
    .limit(20);
};

export const getItemWithID = (req: Request, res: Response) => {
  const item = Item.findById(req.params.Varenummer, (err: any, item: any) => {
    if (err) {
      res.send(err);
    }
    res.json(item);
  });
};
