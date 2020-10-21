import { ItemActionsTypes, Item, CREATE_ITEM_REQUEST } from './types';

export function createItem(item: Item): ItemActionsTypes {
  return {
    type: CREATE_ITEM_REQUEST,
    payload: item,
  };
}
