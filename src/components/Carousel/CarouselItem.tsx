import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { CarouselData, Movie } from "../../interfaces/interfaces"
import CarouselItemImage from './CarouselItemImage';
import CarouselIteamTitle from './CarouselItemTitle';


const CarouselItem: FC<CarouselData> = ({ items }) => {
  return (
    <Text>{items.map((movie: Movie) => {
      return (
        <View>
          <CarouselItemImage movieImage={movie.posterUrl} />
          <CarouselIteamTitle movieTitle={movie.title} />
        </View>
      )
    })}</Text>
  )

};

export default CarouselItem;
