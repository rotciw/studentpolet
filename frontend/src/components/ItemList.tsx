import React, { useEffect, useState } from 'react';
import { Item } from './Item';
import axios from 'axios';
// import { GlobalStateContext } from 'context/GlobalStateContext';
import { FlexContainer, StyledTable, StyledTH } from 'styles/Containers';
import styled from 'styled-components';

interface CourseProps {
  Varenavn: string;
  Varenummer: string;
  Alkohol: number;
  Pris: number;
}

export const EmptyResult = styled.h3`
  text-align: center;
  align-self: center;
  flex: 1;
`;

export const ItemList: React.FC = () => {
  const [items, updateItems] = useState<CourseProps[]>([]);
  const [pageNumber, updatePageNumber] = useState(1);
  // const { totalPageProvider, searchQueryProvider } = useContext(
  //   GlobalStateContext,
  // )!;
  useEffect(() => {
    const getItems = async () => {
      await axios
        .get(`http://localhost:8000/items?page=${pageNumber}`)
        .then((res) => {
          // console.log(res.data);
          updateItems(res.data);
          // totalPageProvider.setTotalPage(
          //   Math.ceil(res.data.count / resultLimit),
          // );
        })
        .catch((err) => console.log(err));
    };
    getItems();
    // start += resultLimit;
  }, [pageNumber]);

  return (
    <FlexContainer margin='15px 0 0 0'>
      <StyledTable>
        <thead>
          <tr>
            <StyledTH width='25%'>Varenr</StyledTH>
            <StyledTH width='25%' textAlign='left'>
              Varenavn
            </StyledTH>
            <StyledTH width='25%'>Pris</StyledTH>
            <StyledTH width='25%'>Alkohol</StyledTH>
          </tr>
        </thead>
        <tbody>
          {items.map((currentItem) => {
            return (
              <Item
                itemNumber={currentItem.Varenummer}
                itemName={currentItem.Varenavn}
                price={currentItem.Pris}
                alcohol={currentItem.Alkohol}
              />
            );
          })}
        </tbody>
        <button onClick={() => updatePageNumber(pageNumber + 1)}>Next</button>
      </StyledTable>
    </FlexContainer>
  );
};
