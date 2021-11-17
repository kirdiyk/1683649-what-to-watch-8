import {AuthorizationStatus} from '../const';
import {Film} from './film';

export type States = {
  currentGenre: string;
  promo: Film;
  films: Film[];
  limitCounter: number;
  filmNumberLimit: number;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}
