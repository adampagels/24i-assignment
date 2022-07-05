import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import SingleMovie from '../../components/SingleMovie/SingleMovie';
import { Movie } from '../../interfaces/interfaces';

const Movies = () => {
  const route: RouteProp<{ params: { movie: Movie } }, 'params'> = useRoute();
  const movie = route.params.movie;

  return (
    <>
      <SingleMovie movie={movie} />
    </>
  );
};

export default Movies;
