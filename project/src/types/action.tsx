import {Film} from './film';

export type GetFilms = {
  type: ActionType.GetFilms;
  payload: Film[];
};

export type ChangeGenre = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export enum ActionType {
  GetFilms = 'filmList/getFilms',
  ChangeGenre = 'filmList/changeGenre',
  ChangeLimitCounter = 'filmList/changeLimitCounter',
  ChangeFilmNumberLimit = 'filmList/changeFilmNumberLimit',
  ResetFilmLimit = 'filmList/resetFilmNumberLimit',
}

export type ChangeLimitCounter = {
  type: ActionType.ChangeLimitCounter;
}

export type ChangeFilmNumberLimit = {
  type: ActionType.ChangeFilmNumberLimit;
}

export type ResetFilmLimit = {
  type: ActionType.ResetFilmLimit;
}

export type Actions =
  ChangeGenre |
  GetFilms |
  ChangeLimitCounter |
  ChangeFilmNumberLimit |
  ResetFilmLimit;
