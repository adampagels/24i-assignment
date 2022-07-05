import React, { FC } from 'react';
import { Image } from 'react-native';
import { styles } from './SingleMovie.styles';


const SingleMovieImage: FC<{ movieImage: string }> = ({ movieImage }) => {
  return (
    <Image
      style={styles.singleMovieImage}
      source={{ uri: movieImage }}
      resizeMode="stretch"
    />
  )

};

export default SingleMovieImage;
