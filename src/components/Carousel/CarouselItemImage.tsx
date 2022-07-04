import React, { FC } from 'react';
import { Image } from 'react-native';


const CarouselIteamImage: FC<{ movieImage: string }> = ({ movieImage }) => {
  return (
    <Image style={{ height: 180, width: 130 }} source={{ uri: movieImage }} />
  )
};

export default CarouselIteamImage;
