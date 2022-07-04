import React, { FC } from 'react';
import { Text } from 'react-native';


const CarouselIteamTitle: FC<{ movieTitle: string }> = ({ movieTitle }) => {
  return (
    <Text>{movieTitle}</Text>
  )
};

export default CarouselIteamTitle;
