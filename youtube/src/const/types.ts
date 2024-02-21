export interface Movie {
  status: null | string;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: null | number;
  };
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  movieLength: number;
  id: number;
  type: string;
  name: string;
  description: string;
  year: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  genres: { name: string }[];
  countries: { name: string }[];
  typeNumber: number;
  alternativeName: string;
  enName: string | null;
  names: { name: string; language: string; type: string | null }[];
  ratingMpaa: string;
  shortDescription: string;
  ticketsOnSale: boolean;
  ageRating: number;
  logo: {
    url: string;
  };
  top10: null;
  top250: number;
  isSeries: boolean;
  seriesLength: number | null;
  totalSeriesLength: number | null;
}

export interface MovieResponce {
  docs: Movie[];
}
