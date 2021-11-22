import {NameSpace} from '../reducer-root';
import {States} from '../../types/states';
import {Users} from '../../types/users';
import {AuthorizationStatus} from '../../const';
import {Film} from '../../types/film';

export const getAuthorizationStatus = (state: States): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getDataLoadedStatus = (state: States): boolean => state[NameSpace.user].isDataLoaded;
export const getUser = (state: States): Users => state[NameSpace.user].user;
export const getFavoriteFilms = (state: States): Film[] => state[NameSpace.user].favoriteFilms;
