import { Item, ItemActionsTypes, CREATE_ITEM_REQUEST } from './types';

const initialState: Item = {
  id: '',
  name: '',
  price: 0,
  alcohol: 0,
};

export default function itemReducer(
  state = initialState,
  action: ItemActionsTypes,
): Item {
  switch (action.type) {
    case CREATE_ITEM_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
