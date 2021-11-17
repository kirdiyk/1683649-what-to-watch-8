
import {ActionType} from '../types/action';
import {AuthorizationStatus} from '../const';
import {Film} from '../types/film';

export const loadPromo = (film: Film) => ({
  type: ActionType.LoadPromo,
  payload: film,
}as const);

export const loadFilms = (films: Film[]) => ({
  type: ActionType.LoadFilms,
  payload: films,
} as const);

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const changeLimitCounter = () => ({
  type: ActionType.ChangeLimitCounter,
} as const);

export const changeFilmLimit = () => ({
  type: ActionType.ChangeFilmLimit,
} as const);

export const resetFilmLimit = () => ({
  type: ActionType.ResetFilmLimit,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
