import {Namespace} from '../reducer-root';
import {States} from '../../types/states';
import {Users} from '../../types/users';
import {AuthorizationStatus} from '../../const';
import {Film} from '../../types/film';

export const getAuthorizationStatus = (state: States): AuthorizationStatus => state[Namespace.user].authorizationStatus;
export const getDataLoadedStatus = (state: States): boolean => state[Namespace.user].isDataLoaded;
export const getUser = (state: States): Users => state[Namespace.user].user;
export const getFavoriteFilms = (state: States): Film[] => state[Namespace.user].favoriteFilms;
