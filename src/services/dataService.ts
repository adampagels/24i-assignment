import { useFetch } from '../hooks/useFetch';
import { allMoviesEndpoint } from '../api/endpoints/endpoints';
import { Carousel } from '../interfaces/interfaces';

export const fetchedMovies = () => {
  return useFetch<Carousel>(allMoviesEndpoint);
};
