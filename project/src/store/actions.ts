
import {ActionType} from '../types/action';
import {AuthorizationStatus, AppRoute} from '../const';
import {Film} from '../types/film';
import {Users} from '../types/users';
import {FilmReview} from '../types/film-review';

export const loadFilm = (film: Film) => ({
  type: ActionType.LoadFilm,
  payload: film,
} as const);

export const loadSimilarFilms = (films: Film[]) => ({
  type: ActionType.LoadSimilarFilms,
  payload: films,
} as const);

export const loadComments = (comments: FilmReview[]) => ({
  type: ActionType.LoadComments,
  payload: comments,
} as const);

export const changeUser = (user: Users) => ({
  type: ActionType.ChangeUser,
  payload: user,
} as const);

export const redirectToRoute = (url: AppRoute | string) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

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
