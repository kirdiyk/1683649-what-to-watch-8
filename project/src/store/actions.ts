import {
  ActionType,
  ChangeFilmNumberLimit,
  ChangeGenre,
  ChangeLimitCounter,
  GetFilms,
  ResetFilmLimit
} from '../types/action';
import films from '../mocks/films';


export const changeGenre = (genre: string): ChangeGenre => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilms = (): GetFilms => ({
  type: ActionType.GetFilms,
  payload: films,
});

export const changeLimitCounter = (): ChangeLimitCounter => ({
  type: ActionType.ChangeLimitCounter,
});

export const changeFilmNumberLimit = (): ChangeFilmNumberLimit => ({
  type: ActionType.ChangeFilmNumberLimit,
});

export const resetFilmNumberLimit = (): ResetFilmLimit => ({
  type: ActionType.ResetFilmLimit,
});
