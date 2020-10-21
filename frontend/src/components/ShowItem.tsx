import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/combineReducers';
import { FlexContainer, FlexItem } from 'styles/Containers';

export const ShowItem: React.FC = () => {
  const data = useSelector((state: RootState) => state.item);
  return (
    <FlexItem>
      <h2>Data:{data.id}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Price:{data.price}</h2>
      <h2>Alcohol:{data.alcohol} %</h2>
    </FlexItem>
  );
};
