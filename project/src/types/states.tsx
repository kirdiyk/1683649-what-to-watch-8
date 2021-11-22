import {AuthorizationStatus} from '../const';
import {Film} from './film';
import {Users} from './users';
import {FilmReview} from './film-review';
import {RootState} from '../store/reducer-root';

export type FilmsData = {
  films: Film[];
  promoFilm: Film;
  currentFilm: Film;
  similarFilms: Film[];
  comments: FilmReview[];
}

export type CatalogProcess = {
  currentGenre: string;
  limitCounter: number;
  filmNumberLimit: number;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: Users;
  isDataLoaded: boolean;
  favoriteFilms: Film[];
}

export type States = RootState;
