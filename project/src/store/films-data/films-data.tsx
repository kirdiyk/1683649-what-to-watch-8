import {createReducer} from '@reduxjs/toolkit';
import {FilmsData} from '../../types/states';
import {initialFilm} from '../../const';
import { loadComments, loadFilm, loadFilms, loadPromo, loadSimilarFilms, resetFavoriteFilms} from '../actions';

const initialState: FilmsData = {
  films: [],
  promoFilm: initialFilm,
  currentFilm: initialFilm,
  similarFilms: [],
  comments: [],
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      const films = action.payload;
      state.films = films;
    })
    .addCase(loadPromo, (state, action) => {
      const promoFilm = action.payload;
      state.promoFilm = promoFilm;
    })
    .addCase(loadFilm, (state, action) => {
      const currentFilm = action.payload;
      state.currentFilm = currentFilm;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      const similarFilms = action.payload;
      state.similarFilms = similarFilms;
    })
    .addCase(loadComments, (state, action) => {
      const comments = action.payload;
      state.comments = comments;
    })
    .addCase(resetFavoriteFilms, (state) => {
      state.promoFilm.isFavorite = false;
      state.currentFilm.isFavorite = false;
    });
});

export {filmsData};
