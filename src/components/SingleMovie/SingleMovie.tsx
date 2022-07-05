import React, { FC } from 'react';
import { View } from 'react-native';
import { Movie } from '../../interfaces/interfaces';
import SingleMovieImage from './SingleMovieImage';
import SingleMovieTitle from './SingleMovieTitle';
import SingleMovieInfo from './SingleMovieInfo';
import { styles } from './SingleMovie.styles';
import { ScrollView } from 'react-native-gesture-handler';

const SingleMovie: FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <>
      <View style={styles.singleMovieContainer}>
        <View style={styles.singleMovieTitleImageContainer}>
          <SingleMovieImage movieImage={movie.posterUrl} />
          <SingleMovieTitle movieTitle={movie.title} />
        </View>
        <ScrollView alwaysBounceVertical={false}>
          <SingleMovieInfo movie={movie} />
        </ScrollView>
      </View>
    </>
  );
};

export default SingleMovie;
