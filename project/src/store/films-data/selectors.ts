import {Namespace} from '../reducer-root';
import {States} from '../../types/states';
import {Film} from '../../types/film';
import {FilmReview} from '../../types/film-review';

export const getFilms = (state: States): Film[] => state[Namespace.data].films;
export const getPromo = (state: States): Film => state[Namespace.data].promoFilm;
export const getCurrentFilm = (state: States): Film => state[Namespace.data].currentFilm;
export const getSimilarFilms = (state: States): Film[] => state[Namespace.data].similarFilms;
export const getComments = (state: States): FilmReview[] => state[Namespace.data].comments;
