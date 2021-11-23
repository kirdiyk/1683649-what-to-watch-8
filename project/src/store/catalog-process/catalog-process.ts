import {CatalogProcess} from '../../types/states';
import {ALL_GENRES, STEP_FILMS, LIMIT_COUNTER_START} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeFilmLimit,
  changeGenre,
  changeLimitCounter,
  resetFilmLimit} from '../actions';

const initialState: CatalogProcess = {
  currentGenre: ALL_GENRES,
  limitCounter: LIMIT_COUNTER_START,
  filmNumberLimit: STEP_FILMS,
};

const catalogProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const currentGenre = action.payload;
      state.currentGenre = currentGenre;
    })
    .addCase(changeLimitCounter, (state, action) => { // action не используется
      state.limitCounter = state.limitCounter + 1;
    })
    .addCase(changeFilmLimit, (state, action) => { // action не используется
      state.filmNumberLimit = state.filmNumberLimit * state.limitCounter;
    })
    .addCase(resetFilmLimit, (state, action) => { // action не используется
      state.limitCounter = initialState.limitCounter;
      state.filmNumberLimit = initialState.filmNumberLimit;
    });
});

export {catalogProcess};
