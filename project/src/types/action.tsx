import {Film} from './film';

export type GetFilmsAction = {
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
}

export type Actions = ChangeGenre | GetFilmsAction;
