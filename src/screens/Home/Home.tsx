import React from 'react';
import { fetchedMovies } from '../../services/dataService';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
  const fetchedMovieData = fetchedMovies();
  const movieInformation = fetchedMovieData?.carousels;

  return movieInformation?.map(movie => {
    return <Carousel title={movie.title} items={movie.items} />;
  });
};

export default Home;
