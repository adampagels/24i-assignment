import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './Carousel.styles';


const CarouselIteamTitle: FC<{ movieTitle: string }> = ({ movieTitle }) => {
  return (
    <Text style={styles.carouselItemTitle}>{movieTitle}</Text>
  )
};

export default CarouselIteamTitle;
