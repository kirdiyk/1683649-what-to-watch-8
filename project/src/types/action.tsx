import {Action} from 'redux';
import { ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {States} from '../types/states';

export enum ActionType {
  LoadPromo = 'data/loadPromoFilm',
  LoadFilms = 'data/loadFilms',
  LoadFilm = 'data/loadFilm',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadComments = 'data/loadComments',
  ChangeGenre = 'filmList/changeGenre',
  ChangeLimitCounter = 'filmList/changeLimitCounter',
  ChangeFilmLimit = 'filmList/changeFilmNumberLimit',
  ResetFilmLimit = 'filmList/resetFilmNumberLimit',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  ChangeUser = 'user/user',
  RedirectToRoute = 'filmList/redirectToRoute',
  LoadFavoriteFilms = 'user/loadFavoriteFilms',
  ResetFavoriteFilms = 'user/resetFavoriteFilms',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, States, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<States, AxiosInstance, Action>;
