import React, { FC } from 'react';
import { View } from 'react-native';
import { CarouselData, Movie } from '../../interfaces/interfaces';
import { MovieSceenNavigationProp } from '../../types/types';
import { styles } from './Carousel.styles';
import CarouselItemImage from './CarouselItemImage';
import CarouselIteamTitle from './CarouselItemTitle';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CarouselItem: FC<CarouselData> = ({ items }) => {
  const navigation = useNavigation<MovieSceenNavigationProp>();

  return (
    <>
      {items.map((movie: Movie) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Movie', { movie: movie })}>
            <View style={styles.carouselItem}>
              <CarouselItemImage movieImage={movie.posterUrl} />
              <CarouselIteamTitle movieTitle={movie.title} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default CarouselItem;
