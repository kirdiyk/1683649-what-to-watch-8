import {NameSpace} from '../reducer-root';
import { States } from '../../types/states';

export const getCurrentGenre = (state: States): string => state[NameSpace.catalog].currentGenre;
export const getLimitCounter = (state: States): number => state[NameSpace.catalog].limitCounter;
export const getFilmLimit = (state: States): number => state[NameSpace.catalog].filmNumberLimit;
