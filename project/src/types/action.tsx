import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {States} from '../types/states';
import {
  loadFilm,
  loadSimilarFilms,
  loadComments,
  changeUser,
  redirectToRoute,
  loadPromo,
  loadFilms,
  changeGenre,
  changeLimitCounter,
  changeFilmLimit,
  resetFilmLimit,
  requireAuthorization,
  requireLogout} from '../store/actions';

export enum ActionType {
  LoadPromo = 'data/loadPromoFilm',
  LoadFilms = 'data/loadFilms',
  LoadFilm = 'data/loadFilm',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadComments = 'data/loadComments',
  ChangeUser = 'user/user',
  RedirectToRoute = 'filmList/redirectToRoute',
  ChangeGenre = 'filmList/changeGenre',
  ChangeLimitCounter = 'filmList/changeLimitCounter',
  ChangeFilmLimit = 'filmList/changeFilmNumberLimit',
  ResetFilmLimit = 'filmList/resetFilmNumberLimit',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof loadPromo>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof changeLimitCounter>
  | ReturnType<typeof changeLimitCounter>
  | ReturnType<typeof changeFilmLimit>
  | ReturnType<typeof resetFilmLimit>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof loadComments>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof changeUser>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, States, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<States, AxiosInstance, Actions>;
