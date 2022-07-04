import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Movie } from '../interfaces/interfaces';

export type MovieScreenParamList = {
  Movie: { movie: Movie };
};

export type MovieSceenNavigationProp =
  NativeStackNavigationProp<MovieScreenParamList>;
