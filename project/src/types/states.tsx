import {AuthorizationStatus} from '../const';
import {Film} from './film';
import {Users} from './users';
import {FilmReview} from './film-review';

export type States = {
  currentGenre: string;
  promo: Film;
  films: Film[];
  currentFilm: Film;
  similarFilms: Film[];
  comments: FilmReview[];
  limitCounter: number;
  filmNumberLimit: number;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  user: Users,
}
