import React from 'react';
import { fetchedMovies } from '../../services/dataService';
import Carousel from '../../components/Carousel/Carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  const fetchedMovieData = fetchedMovies();
  const movieInformation = fetchedMovieData?.carousels;

  return (
    <SafeAreaView>
      <ScrollView alwaysBounceVertical={false}>
        {movieInformation?.map((movie, index) => {
          return (
            <Carousel title={movie.title} items={movie.items} key={index} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
