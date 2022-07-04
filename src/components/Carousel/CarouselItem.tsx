import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { CarouselData, Movie } from "../../interfaces/interfaces"
import { styles } from './Carousel.styles';
import CarouselItemImage from './CarouselItemImage';
import CarouselIteamTitle from './CarouselItemTitle';


const CarouselItem: FC<CarouselData> = ({ items }) => {
  return (
    <>
      {items.map((movie: Movie) => {
        return (
          <View style={styles.carouselItem}>
            <CarouselItemImage movieImage={movie.posterUrl} />
            <CarouselIteamTitle movieTitle={movie.title} />
          </View>
        )
      })}
    </>
  )

};

export default CarouselItem;
