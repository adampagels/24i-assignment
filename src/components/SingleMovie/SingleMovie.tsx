import React, { FC } from 'react';
import { View } from 'react-native';
import { Movie } from '../../interfaces/interfaces';
import SingleMovieImage from './SingleMovieImage';
import SingleMovieTitle from './SingleMovieTitle';
import SingleMovieInfo from "./SingleMovieInfo"
import { styles } from './SingleMovie.styles';

const SingleMovie: FC<{ movie: Movie }> = ({ movie }) => {

  return (
    <>
      <View>
        <View style={styles.singleMovieTitleImageContainer}>
          <SingleMovieImage movieImage={movie.posterUrl} />
          <SingleMovieTitle movieTitle={movie.title} />
        </View>
        <SingleMovieInfo movie={movie} />
      </View>
    </>
  );
};

export default SingleMovie;
