import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from "./Carousel.styles";


const CarouselHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <Text style={styles.carouselHeader}>{title}</Text>
  )

};

export default CarouselHeader;
