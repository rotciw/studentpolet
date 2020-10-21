import React from 'react';
import { CourseButton } from '../styles/Buttons';
import { CourseItemText } from 'styles/Text';
import { useDispatch } from 'react-redux';
import { createItem } from 'store/actions';

interface CourseProps {
  itemNumber: string;
  itemName: string;
  price: number;
  alcohol: number;
}

export const Item: React.FC<CourseProps> = ({
  itemNumber,
  itemName,
  price,
  alcohol,
}) => {
  const dispatch = useDispatch();

  const handleCourseClick = () => {
    console.log('Trykk på fag 1');
    dispatch(
      createItem({
        id: itemNumber,
        name: itemName,
        price: price,
        alcohol: alcohol,
      }),
    );
  };
  return (
    <tr>
      <td colSpan={4}>
        {/* <Link to={`/course/${courseCode}`}> */}
        <CourseButton clickHandler={handleCourseClick}>
          <CourseItemText width='25%'>{itemNumber}</CourseItemText>
          <CourseItemText width='25%' textAlign='left'>
            {itemName}
          </CourseItemText>
          <CourseItemText width='25%'>{price} kr</CourseItemText>
          <CourseItemText width='25%'>{alcohol} %</CourseItemText>
        </CourseButton>
        {/* </Link> */}
      </td>
    </tr>
  );
};
