import React, { FC } from 'react';
import { Text } from 'react-native';
import { Movie } from '../../interfaces/interfaces';
import { styles } from './SingleMovie.styles';


const SingleMovieTitle: FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <>
      <Text style={styles.singleMovieInfo}>{movie.plot}</Text>
      <Text style={styles.singleMovieInfo}> Directed by: {movie.director}</Text>
      <Text style={styles.singleMovieInfo}> Released in: {movie.year}</Text>
      <Text style={styles.singleMovieInfo}>Starring: {movie.actors}</Text>
      <Text style={styles.singleMovieInfo}>Genres: {movie.genres}</Text>
    </>
  )

};

export default SingleMovieTitle;
