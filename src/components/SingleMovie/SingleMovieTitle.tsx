import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './SingleMovie.styles';


const SingleMovieTitle: FC<{ movieTitle: string }> = ({ movieTitle }) => {
  return (
    <Text style={styles.singleMovieTitle}>
      {movieTitle}
    </Text>
  )

};

export default SingleMovieTitle;
