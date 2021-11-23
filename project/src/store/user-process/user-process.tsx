import {UserProcess} from '../../types/states';
import {AuthorizationStatus, initialUser} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import { changeUser, loadFavoriteFilms, requireAuthorization, resetFavoriteFilms, requireLogout} from '../actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: initialUser,
  isDataLoaded: false,
  favoriteFilms: [],
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      const authorizationStatus = action.payload;
      state.authorizationStatus = authorizationStatus;
      state.isDataLoaded = true;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(changeUser, (state, action) => {
      const user = action.payload;
      state.user = user;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      const favoriteFilms = action.payload;
      state.favoriteFilms = favoriteFilms;
    })
    .addCase(resetFavoriteFilms, (state) => {
      state.favoriteFilms = initialState.favoriteFilms;
    });
});

export {userProcess};
