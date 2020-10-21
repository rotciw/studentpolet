import { combineReducers } from 'redux';
import itemReducer from './reducer';

const rootReducer = combineReducers({
  item: itemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
