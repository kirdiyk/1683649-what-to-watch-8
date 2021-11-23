import {Namespace} from '../reducer-root';
import { States } from '../../types/states';

export const getCurrentGenre = (state: States): string => state[Namespace.catalog].currentGenre;
export const getLimitCounter = (state: States): number => state[Namespace.catalog].limitCounter;
export const getFilmLimit = (state: States): number => state[Namespace.catalog].filmNumberLimit;
