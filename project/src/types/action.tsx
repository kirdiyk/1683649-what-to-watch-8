import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {States} from '../types/states';
import {
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
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, States, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<States, AxiosInstance, Actions>;
