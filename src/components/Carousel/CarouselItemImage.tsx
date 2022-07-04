import React, { FC } from 'react';
import { Image } from 'react-native';
import { styles } from './Carousel.styles';


const CarouselIteamImage: FC<{ movieImage: string }> = ({ movieImage }) => {
  return (
    <Image style={styles.carouselImage} source={{ uri: movieImage }} />
  )
};

export default CarouselIteamImage;
