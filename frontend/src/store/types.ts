export interface Item {
  id: string;
  name: string;
  price: number;
  alcohol: number;
}

export interface ItemState {
  data: Item;
}

export const CREATE_ITEM_REQUEST = '@item/CREATE_ITEM_REQUEST';

interface CreateItemRequeset {
  type: typeof CREATE_ITEM_REQUEST;
  payload: Item,
}

export type ItemActionsTypes = CreateItemRequeset;
