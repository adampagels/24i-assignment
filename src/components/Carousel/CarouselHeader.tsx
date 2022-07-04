import React, { FC } from 'react';
import { Text } from 'react-native';


const CarouselHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <Text>{title}</Text>
  )

};

export default CarouselHeader;
