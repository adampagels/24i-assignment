import React, { FC } from 'react';
import { Text } from 'react-native';
import { Movie } from '../../interfaces/interfaces';
import { styles } from './SingleMovie.styles';

const SingleMovieTitle: FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <>
      <Text style={styles.singleMovieInfo}>{movie.plot}</Text>
      <Text style={styles.singleMovieInfo}>
        <Text style={styles.singleMovieInfoHeader}>Directed by: </Text>
        {movie.director}
      </Text>
      <Text style={styles.singleMovieInfo}>
        <Text style={styles.singleMovieInfoHeader}>Released in: </Text>
        {movie.year}
      </Text>
      <Text style={styles.singleMovieInfo}>
        <Text style={styles.singleMovieInfoHeader}>Starring: </Text>
        {movie.actors}
      </Text>
      <Text style={styles.singleMovieInfo}>
        <Text style={styles.singleMovieInfoHeader}>Genres: </Text>
        {movie.genres}
      </Text>
    </>
  );
};

export default SingleMovieTitle;
