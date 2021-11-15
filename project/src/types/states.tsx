import {Film} from './film';

export type States = {
  currentGenre: string;
  films: Film[];
  limitCounter: number;
  filmNumberLimit: number;
}
