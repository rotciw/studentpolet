import { ItemListPage } from 'pages/ItemListPage';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'store/combineReducers';
import { ShowItem } from 'components/ShowItem';

const store = createStore(rootReducer);

const App: React.FC = () => (
  <Provider store={store}>
    <ItemListPage />
    <ShowItem />
  </Provider>
);

export default App;
