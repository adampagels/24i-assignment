export interface Carousel {
  carousels: Array<CarouselData>;
}

export interface CarouselData {
  title: string;
  items: Array<Movie>;
}

export interface Movie {
  id: string;
  title: string;
  year: string;
  duration: string;
  genres: Array<string>;
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}
