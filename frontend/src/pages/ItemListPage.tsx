// import { GlobalStateContext } from 'context/GlobalStateContext';
import React, { useContext } from 'react';
import { Layout } from 'styles/Layout';
import { ItemList } from 'components/ItemList';
// import { PaginationContainer } from 'components/pagination/PaginationContainer';

export const ItemListPage: React.FC = () => {
  // const { pageProvider, totalPageProvider } = useContext(
  //   GlobalStateContext,
  // )!;

  return (
    <Layout>
      <ItemList />
      {/* <PaginationContainer totalPages={totalPageProvider.totalPage} /> */}
    </Layout>
  );
};
